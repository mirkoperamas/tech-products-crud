import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import {
  MainContainer,
  TextRegister,
  TextAction,
  ButtonsBox,
  LogoutButton,
} from "../../containers/MainContainer";
import "../../styles/main.css";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { app } from "../../firebase/firebase.config";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { ProductsList } from "./components/ProductsList/ProductsList";

export const UserProducts = () => {
  const { user, userLogout } = useAuth();

  const firestore = getFirestore(app);

  const [openNewRegister, setOpenNewRegister] = useState(false);
  const [openListProducts, setOpenListProducts] = useState(false);

  const handleLogout = () => {
    userLogout();
  };

  const initial = [];

  const userEmail = user.email;
  const [registersArray, setRegistersArray] = useState(null);
  async function SearchOrCreate(registerId) {
    const registerRef = doc(firestore, `products/${registerId}`);
    const consult = await getDoc(registerRef);
    if (consult.exists()) {
      const registerInfo = consult.data();
      return registerInfo.list;
    } else {
      await setDoc(registerRef, { list: [...initial] });
      const consult = await getDoc(registerRef);
      const registerInfo = consult.data();
      return registerInfo.list;
    }
  }

  const toViewNewRegister = () => {
    setOpenNewRegister(true);
    setOpenListProducts(false);
  };
  const toViewList = () => {
    setOpenListProducts(true);
    setOpenNewRegister(false);
  };

  useEffect(() => {
    async function onFetchRegisters() {
      const inRegisters = await SearchOrCreate(userEmail);
      setRegistersArray(inRegisters);
    }
    onFetchRegisters();
  }, []);

  return (
    <>
      <MainContainer>
        <div>
          {user && (
            <>
              <TextRegister>
                You are registered with the following email:{" "}
                <strong>{userEmail}</strong>
              </TextRegister>
              <hr />
              <TextAction>What do you want to do? ...</TextAction>
              <ButtonsBox>
                <button onClick={toViewNewRegister}>
                  Register new product
                </button>
                <button onClick={toViewList}>List products</button>
                <LogoutButton onClick={handleLogout}>Sign Off</LogoutButton>
              </ButtonsBox>

              {openNewRegister == true && (
                <AddProduct
                  registersArray={registersArray}
                  setRegistersArray={setRegistersArray}
                  userEmail={userEmail}
                />
              )}

              {openListProducts == true && registersArray && (
                <ProductsList
                  registersArray={registersArray}
                  setRegistersArray={setRegistersArray}
                  userEmail={userEmail}
                />
              )}
            </>
          )}
        </div>
      </MainContainer>
    </>
  );
};
