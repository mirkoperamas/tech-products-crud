import React, { useState } from "react";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import {
  TitleAddProduct,
  InputAddBox,
  ButtonsBox,
} from "../../../../containers/MainContainer";
import "../../../../styles/main.css";

import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { app } from "../../../../firebase/firebase.config";

const firestore = getFirestore(app);
const storage = getStorage(app);

export const AddProduct = ({
  userEmail,
  setRegistersArray,
  registersArray,
}) => {
  const [urlDownload, setUrlDownload] = useState(null);

  function addRegister(e) {
    e.preventDefault();

    const name = e.target.formName.value;
    const description = e.target.formDescription.value;
    const price = e.target.formPrice.value;
    const stock = e.target.formStock.value;

    const newArray = [
      ...registersArray,
      {
        id: +new Date(),
        name: name,
        description: description,
        price: price,
        stock: stock,
        url: urlDownload,
      },
    ];

    const registerRef = doc(firestore, `products/${userEmail}`);
    updateDoc(registerRef, { list: [...newArray] });

    setRegistersArray(newArray);
    e.target.formName.value = "";
    e.target.formDescription.value = "";
    e.target.formPrice.value = "";
    e.target.formStock.value = "";
    e.target.formUrl.value = "";
  }

  async function fileHandler(e) {
    const local = e.target.files[0];
    const localRef = ref(storage, `images/${local.name}`);
    await uploadBytes(localRef, local);
    setUrlDownload(await getDownloadURL(localRef));
  }

  return (
    <>
      <TitleAddProduct>
        <hr />
        <h3>Add new product</h3>
        <hr />
      </TitleAddProduct>
      <form onSubmit={addRegister}>
        <InputAddBox>
          <label>Name of product:</label>
          <input type="text" id="formName" className="inputStyle" />
        </InputAddBox>
        <InputAddBox>
          <label>Description of product:</label>
          <input type="text" id="formDescription" className="inputStyle" />
        </InputAddBox>
        <InputAddBox>
          <label>Price of product:</label>
          <input type="number" id="formPrice" className="inputStyle" />
        </InputAddBox>
        <InputAddBox>
          <label>Stock of product:</label>
          <input type="number" id="formStock" className="inputStyle" />
        </InputAddBox>
        <InputAddBox>
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
        </InputAddBox>
        <ButtonsBox>
          <button style={{ marginTop: "1.5rem" }}>Add product</button>
        </ButtonsBox>
      </form>
    </>
  );
};
