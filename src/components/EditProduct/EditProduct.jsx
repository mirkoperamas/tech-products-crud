import React, { useEffect, useState } from "react";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  PrimaryButton,
  ButtonsBox,
  DangerButton,
} from "../styledComponents/buttons";
import {
  TitleSubLinks,
  InputBox,
  MainContainer,
} from "../styledComponents/containers/SecondaryView";
import "../../styles/main.css";

import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { app, db } from "../../firebase/firebase.config";

import { useAuth } from "../../context/authContext";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const storage = getStorage(app);

export const EditProduct = () => {
  const { user } = useAuth();
  const userEmail = user.email;

  async function fileHandler(e) {
    const local = e.target.files[0];
    const localRef = ref(storage, `images/${local.name}`);
    await uploadBytes(localRef, local);
    setUrlDownload(await getDownloadURL(localRef));
  }

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [urlDownload, setUrlDownload] = useState(null);

  const date = new Date();
  const dateRegister = date.toLocaleString();

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, userEmail, id);
    const data = {
      date: dateRegister,
      name: name,
      description: description,
      price: price,
      stock: stock,
      url: urlDownload,
    };
    await updateDoc(product, data);
    Swal.fire("Message", "Your product was edited!", "success");
    navigate("/user-products");
  };
  const getProductById = async (id) => {
    const product = await getDoc(doc(db, userEmail, id));
    if (product.exists()) {
      setName(product.data().name);
      setDescription(product.data().description);
      setPrice(product.data().price);
      setStock(product.data().stock);
      setUrlDownload(product.data().url);
    } else {
      console.error("Error");
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <>
      <MainContainer>
        <TitleSubLinks>
          <hr />
          <h3>Edit selected product</h3>
          <hr />
        </TitleSubLinks>
        <form onSubmit={update}>
          <InputBox>
            <label>Name of product:</label>
            <input
              type="text"
              className="inputStyle"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <label>Description of product:</label>
            <input
              type="text"
              className="inputStyle"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <label>Price of product:</label>
            <input
              type="number"
              className="inputStyle"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <label>Stock of product:</label>
            <input
              type="number"
              className="inputStyle"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <label>Upload a product image:</label>
            <div className="fileContent">
              <input
                type="file"
                onChange={fileHandler}
                id="formUrl"
                className="inputCover"
                size="60"
              />
              <div className="fileDesign">
                <div className="photo"></div>
                <p>Click to upload</p>
              </div>
            </div>
          </InputBox>
          <ButtonsBox>
            <PrimaryButton style={{ marginTop: "1.5rem" }} type="submit">
              Edit product
            </PrimaryButton>
            <Link to={"/user-products/list"}>
              <DangerButton>Cancel</DangerButton>
            </Link>
          </ButtonsBox>
        </form>
      </MainContainer>
    </>
  );
};
