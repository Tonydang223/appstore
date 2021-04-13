import React, { createContext, useState, useEffect } from "react";
import data from "../data/data.json";
import axios from "axios";
import formatNumber from "../util2";
import api from "../api/api"
import { isUuid } from "uuidv4";
export const ProductContext = createContext();


const ProductContextProvider = ({ children }) => {
  //state
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [searchProduct, setSearchProduct] = useState([]);
  const received = async () => {
    const res = await api.get("/products");
    return res.data;
  }
  const random = Math.floor(Math.random() *1000)

  const addProduct = async (values) => {
    try {
      console.log(values)
      const res = await api.post("/products",values)
      setProducts([...products,res.data]);
    } catch (error) {
      console.log(error.message)
    }

  }
  const removeProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`)
      const newProductList = products.filter((product)=>{
        return product.id !== id;
      })
      setProducts(newProductList)
    } catch (error) {
      console.log(error.message)

    }
  }
  const updateProduct = async (values) => {
    const response = await api.put(`/products/${values.id}`, values);
    const { id, name, email } = response.data;
    setProducts(
      products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  }
  // const getProducts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/products");
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  useEffect(() => {
    const getdatas = async ()=>{
      const allProducts = await received();
      if(allProducts) setProducts(allProducts)
    }
    getdatas();
  }, []);
  const handleAddClick = (productValue) => {
    console.log(productValue);
    const currentProduct = cartItems.find((x) => x._id === productValue._id);
    if (currentProduct) {
      setCartItems(
        cartItems.map((item) => {
          return item._id === productValue._id
            ? { ...currentProduct, count: currentProduct.count + 1 }
            : item;
        })
      );
    }
  };
  const handleRemoveClick = (productValue) => {
    const currentProduct = cartItems.find((x) => x._id === productValue._id);
    if (currentProduct.count === 1) {
      setCartItems(
        cartItems.map((item) => {
          return item._id === productValue._id
            ? { ...currentProduct, count: 1 }
            : item;
        })
      );
    } else {
      setCartItems(
        cartItems.map((item) => {
          return item._id === productValue._id
            ? { ...currentProduct, count: currentProduct.count - 1 }
            : item;
        })
      );
    }
  };
  const handleRemoveProduct = (id) => {
    const currentProduct = cartItems.find((x) => x._id === id);
    const cartValue = [...cartItems];
    if (currentProduct) {
      setCartItems(cartValue.filter((item) => item._id !== id));
    }
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartValue.filter((item) => item._id !== id))
    );
  };
  const handleAddToCart = (productValue) => {
    const cartValues = [...cartItems];
    const alreadyInCart = cartItems.every((item) => {
      return item._id !== productValue._id;
    });
    if (alreadyInCart) {
      cartValues.push({
        ...productValue,
        count: 1,
      });
    } else {
      const cartName = cartItems.filter((item) => item._id === productValue._id);
      console.log('cartName', cartName)
      alert(cartName[0].title + " has been in your cart!");
    }
    setCartItems(cartValues);
    localStorage.setItem("cartItems", JSON.stringify(cartValues));
  };
  const handleAddToCartFromDetails = (productValue) => {
    if (productValue.count === 0 || productValue.size === '') {
      alert("You have to enter your number of product");
    } else {
      const currentCartItem = products.filter(
        (x) => x._id === productValue._id
      );
      const cartValues = [...cartItems];
      const alreadyInCart = cartItems.every((item) => {
        return item._id !== productValue._id;
      });
      const newCartItem = {
        ...currentCartItem[0],
        ...productValue,
        count: formatNumber(productValue.count),
      };
      if (alreadyInCart) {
        cartValues.push(newCartItem);
      } else {
        const cartName = cartItems.map((item) => item.title);
        alert(cartName + " has been in your cart!");
      }
      setCartItems(cartValues);
    }
  };

  const handleFilterProducts = (event) => {
    if (event.target.value === "") {
      return;
    } else if (event.target.value === "All") {
      setSize(event.target.value);
      setProducts(data.products);
    } else {
      setSize(event.target.value);
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        )
      );
    }
  };
  const handleSortProducts = (event) => {
    console.log(event.target.value);
    const sortValue = event.target.value;
    setSort(sortValue);
    const newProductList = [...products];
    newProductList.sort((a, b) =>
      sort === "Lowest"
        ? a.price < b.price
          ? 1
          : -1
        : sort === "Highest"
        ? a.price > b.price
          ? 1
          : -1
        : a._id < b._id
        ? 1
        : -1
    );
    setProducts(newProductList);
  };
  const handleSortCategory = (event) => {
    const categoryValue = event.target.value;
    if (categoryValue === "") {
      return;
    } else if (categoryValue === "All") {
      setCategory(categoryValue);
      setProducts(data.products);
    } else if (categoryValue === "Trousers") {
      setCategory(categoryValue);
      setProducts(
        data.products.filter((product) => product.category === categoryValue)
      );
    } else if (categoryValue === "Coats") {
      setCategory(categoryValue);
      setProducts(
        data.products.filter((product) => product.category === categoryValue)
      );
    } else if (categoryValue === "T-Shirts") {
      setCategory(categoryValue);
      setProducts(
        data.products.filter((product) => product.category === categoryValue)
      );
    } else {
      setCategory(categoryValue);
      setProducts(
        data.products.filter((product) => product.category === categoryValue)
      );
    }
  };
  const handleSearchSubmit = (search) => {
    const searchValue = data.products.filter(
      (product) => product.title === search
    );
    setSearchProduct(searchValue);
  };
  const productContextData = {
    products,
    size,
    sort,
    category,
    cartItems,
    searchProduct,
    setProducts,
    updateProduct,
    removeProduct,
    addProduct,
    handleSortProducts,
    handleFilterProducts,
    handleSortCategory,
    handleAddToCart,
    handleAddToCartFromDetails,
    handleAddClick,
    handleRemoveClick,
    handleRemoveProduct,
    handleSearchSubmit,
  };
  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
