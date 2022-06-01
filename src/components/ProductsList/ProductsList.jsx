import React, { useEffect, useState } from "react";
import {
  NoFiles,
  TitleProductsList,
  ProductCard,
  ProductInfo,
  MainContainer,
  ProductImage,
} from "../styledComponents/containers/SecondaryView";
import "../../styles/main.css";

import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth } from "../../context/authContext";
import { DangerButton, ListButtons } from "../styledComponents/buttons";
const MySwal = withReactContent(Swal);

export const ProductsList = () => {
  const { user } = useAuth();
  const userEmail = user.email;

  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, userEmail);

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteProduct = async (id) => {
    const productDoc = doc(db, userEmail, id);
    await deleteDoc(productDoc);
    getProducts();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Remove the product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#c7392d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Deleted!", "Your register has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <MainContainer>
      <div>
        <>
          <TitleProductsList>
            <hr />
            <h3>Products List</h3>
            <hr />
          </TitleProductsList>
          {products == "" && <NoFiles>No Files</NoFiles>}
          {products.map((product) => {
            return (
              <ProductCard key={product.id}>
                <div>
                  <ProductInfo>
                    <span>
                      <strong>Id: </strong>
                      <p>{product.id}</p>
                    </span>
                    <span>
                      <strong>Date: </strong>
                      <p>{product.date}</p>
                    </span>
                    <span>
                      <strong>Name: </strong>
                      <p>{product.name}</p>
                    </span>
                    <span>
                      <strong>Description: </strong>
                      <p>{product.description}</p>
                    </span>
                    <span>
                      <strong>Price: </strong>
                      <p>{product.price}</p>
                    </span>
                    <span>
                      <strong>Stock: </strong>
                      <p>{product.stock}</p>
                    </span>
                  </ProductInfo>
                  <div>
                    <ProductImage>
                      <a href={product.url} target="_blank">
                        <img
                          src={`${product.url}.png`}
                          alt={`image-${product.id}`}
                        />
                      </a>
                    </ProductImage>
                  </div>
                </div>
                <ListButtons>
                  <Link to={`/user-products/list/${product.id}`}>
                    <div title="edit">
                      <div className="edit"></div>
                    </div>
                  </Link>
                  <div onClick={() => confirmDelete(product.id)} title="trash">
                    <div className="trash"></div>
                  </div>
                </ListButtons>
              </ProductCard>
            );
          })}
        </>
        <Link to="/user-products">
          <DangerButton style={{ marginTop: "1.5rem" }}>Back</DangerButton>
        </Link>
      </div>
    </MainContainer>
  );
};
