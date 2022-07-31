import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  ButtonsBox,
  DangerButton,
  PrimaryButton,
} from "./styledComponents/buttons";
import {
  TitleSubLinks,
  InputBox,
  MainContainer,
} from "./styledComponents/containers/SecondaryView";
import "../styles/main.css";

import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { app, db } from "../firebase/firebase.config";

import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const storage = getStorage(app);

export const AddProduct = () => {
  const { user } = useAuth();
  const userEmail = user.email;
  const [urlDownload, setUrlDownload] = useState(null);
  const navigate = useNavigate();

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

  const productsCollection = collection(db, userEmail);
  const date = new Date();
  const dateRegister = date.toLocaleString();

  const addProd = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      date: dateRegister,
      name: name,
      description: description,
      price: price,
      stock: stock,
      url: urlDownload,
    });
    Swal.fire("Message", "Your product was registered!", "success");
    navigate("/user-products");
  };

  return (
    <MainContainer>
      <TitleSubLinks>
        <hr />
        <h3>Add new product</h3>
        <hr />
      </TitleSubLinks>
      <form onSubmit={addProd}>
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
            Add product
          </PrimaryButton>
          <Link to={"/user-products"}>
            <DangerButton>Cancel</DangerButton>
          </Link>
        </ButtonsBox>
      </form>
    </MainContainer>
  );
};
