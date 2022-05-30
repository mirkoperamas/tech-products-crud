import React, { useEffect, useState } from "react";
import {
  NoFiles,
  TitleProductsList,
  ProductContent,
  ProductInfo,
  ProductImage,
  ButtonsModifyDataBox,
} from "../../../../containers/MainContainer";
import "../../../../styles/main.css";

import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { app } from "../../../../firebase/firebase.config";
import { EditProduct } from "./EditProduct/EditProduct";

const firestore = getFirestore(app);

export const ProductsList = ({
  registersArray,
  userEmail,
  setRegistersArray,
}) => {
  const [test, setTest] = useState(undefined);

  async function deleteRegister(registerId) {
    const newArray = registersArray.filter(
      (registerObj) => registerObj.id !== registerId
    );
    const registerRef = doc(firestore, `products/${userEmail}`);
    updateDoc(registerRef, { list: [...newArray] });
    setRegistersArray(newArray);
    setTest(registersArray);
  }

  const [editComponent, setEditComponent] = useState(false);

  const viewEditComponent = () => {
    setEditComponent(true);
  };

  function editRegister(registerId) {
    console.log(registerId);
    // const newArray = registersArray.filter(
    //   (registerObj) => registerObj.id !== registerId
    // );
    // setRegistersArray(newArray);
    // setTest(registersArray);
    // console.log(newArray);
    // console.log(registersArray);
    setTest(registerId);
  }

  return (
    <>
      <div>
        {editComponent === false && (
          <>
            <TitleProductsList>
              <hr />
              <h3>Products List</h3>
              <hr />
            </TitleProductsList>
            {registersArray == "" && <NoFiles>No Files</NoFiles>}
            {registersArray.map((registerObj) => {
              return (
                <ProductContent key={registerObj.id}>
                  <div>
                    <ProductInfo>
                      <span>
                        <strong>Id: </strong>
                        <p>{registerObj.id}</p>
                      </span>
                      <span>
                        <strong>Name: </strong>
                        <p>{registerObj.name}</p>
                      </span>
                      <span>
                        <strong>Description: </strong>
                        <p>{registerObj.description}</p>
                      </span>
                      <span>
                        <strong>Price: </strong>
                        <p>{registerObj.price}</p>
                      </span>
                      <span>
                        <strong>Stock: </strong>
                        <p>{registerObj.stock}</p>
                      </span>
                    </ProductInfo>
                    <div>
                      <ProductImage>
                        <a href={registerObj.url} target="_blank">
                          <img
                            src={`${registerObj.url}.png`}
                            alt={`image-${registerObj.id}`}
                          />
                        </a>
                      </ProductImage>
                    </div>
                  </div>
                  <ButtonsModifyDataBox>
                    {/* <div title="edit" onClick={() => editRegister(registerObj)}>
                      <div className="edit"></div>
                    </div> */}
                    <div
                      onClick={() => deleteRegister(registerObj.id)}
                      title="trash"
                    >
                      <div className="trash"></div>
                    </div>
                  </ButtonsModifyDataBox>
                </ProductContent>
              );
            })}
          </>
        )}

        {/* {test && (
          <EditProduct
            userEmail={userEmail}
            setRegistersArray={setRegistersArray}
            registersArray={registersArray}
            test={test}
            setTest={setTest}
          />
        )} */}
      </div>
    </>
  );
};
