import React, { createContext, useState, useEffect } from "react";
import data from "../data/data.json";
import formatNumber from "../util2";
import api from "../api/api";
import { useHistory } from "react-router";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const history = useHistory();
  //state
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [category, setCategory] = useState("");
  const [orderDetails, setOrderDetails] = useState({});
  const [orderedItems, setorderedItems] = useState([]);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  // const [orders, setOrders] = useState(
  //   localStorage.getItem("orders")
  //     ? JSON.parse(localStorage.getItem("orders"))
  //     : []
  // );
  const productFilter = (value) => {
    return value.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
  };
  const handleFilterProducts = (product) => {
    setProductFiltered(product);
  };
  const [productFiltered, setProductFiltered] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const received = async () => {
    const res = await api.get("/products");
    return res.data;
  };
  const random = Math.floor(Math.random() * 1000);

  const addProduct = async (values) => {
    try {
      console.log(values);
      const requets = {
        id: random,
        ...values,
      };
      const res = await api.post("/products", requets);
      setProducts([...products, res.data]);
    } catch (error) {
      console.log(error.message);
    }
  };
  const saveOrder = async (order) => {
    console.log(order);
    try {
      const res = await api.post("/orders", order);
      setorderedItems([...orderedItems, res.data]);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getOrder = async () => {
    try {
      const res = await api.get("/orders");
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteOrder = async (id) => {
    try {
      await api.delete(`/orders/${id}`);
      const newOrderedList = orderedItems.filter((item) => {
        return item.id !== id;
      });
      setorderedItems(newOrderedList);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(orderedItems);
  const removeProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      const newProductList = products.filter((product) => {
        return product.id !== id;
      });
      setProducts(newProductList);
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateProduct = async (values) => {
    const response = await api.put(`/products/${values.id}`, values);
    const { id, name, email } = response.data;
    setProducts(
      products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  };
  useEffect(() => {
    const getdatas = async () => {
      const allProducts = await received();
      if (allProducts) setProducts(allProducts);
    };
    getdatas();
  }, []);
  useEffect(() => {
    const getdatasOrdered = async () => {
      const allOrders = await getOrder();
      if (allOrders) setorderedItems(allOrders);
    };
    getdatasOrdered();
  }, []);

  const handleAddClick = (productValue) => {
    console.log(productValue);
    const currentProduct = cartItems.find((x) => x.id === productValue.id);
    if (currentProduct) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === productValue.id
            ? { ...currentProduct, count: currentProduct.count + 1 }
            : item;
        })
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          cartItems.map((item) => {
            return item.id === productValue.id
              ? { ...currentProduct, count: currentProduct.count + 1 }
              : item;
          })
        )
      );
    }
  };

  const handleRemoveClick = (productValue) => {
    const currentProduct = cartItems.find((x) => x.id === productValue.id);
    if (currentProduct.count === 1) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === productValue.id
            ? { ...currentProduct, count: 1 }
            : item;
        })
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          cartItems.map((item) => {
            return item.id === productValue.id
              ? { ...currentProduct, count: 1 }
              : item;
          })
        )
      );
    } else {
      setCartItems(
        cartItems.map((item) => {
          return item.id === productValue.id
            ? { ...currentProduct, count: currentProduct.count - 1 }
            : item;
        })
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          cartItems.map((item) => {
            return item.id === productValue.id
              ? { ...currentProduct, count: currentProduct.count - 1 }
              : item;
          })
        )
      );
    }
  };
  // const handleRemoveProductFromAdmin = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/products/${id}`);
  //     const productValue = products.filter((product) => product.id !== id);
  //     setProducts(productValue);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  const handleClearAll = (value) => {
    if (value) {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    }
    localStorage.removeItem("orders");
  };
  // const takeOrderValues = (value) => {
  //   if (value) {
  //     setOrders([{ ...orders, ...value }]);
  //   }
  //   return;
  // };
  const handleRemoveProduct = (id) => {
    const currentProduct = cartItems.find((x) => x.id === id);
    const cartValue = [...cartItems];
    if (currentProduct) {
      setCartItems(cartValue.filter((item) => item.id !== id));
    }
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartValue.filter((item) => item.id !== id))
    );
  };
  const handleAddToCart = (productValue) => {
    const cartValues = [...cartItems];
    const alreadyInCart = cartItems.every((item) => {
      return item.id !== productValue.id;
    });
    if (alreadyInCart) {
      cartValues.push({
        ...productValue,
        count: 1,
        size: "L",
      });
    } else {
      const cartName = cartItems.filter((item) => item.id === productValue.id);
      console.log("cartName", cartName);
      alert(cartName[0].title + " has been in your cart!");
    }
    setCartItems(cartValues);
    localStorage.setItem("cartItems", JSON.stringify(cartValues));
  };
  const handleAddToCartFromDetails = (productValue) => {
    if (productValue.count === 0) {
      alert("You have to enter your number of product");
    } else if (productValue.size === "") {
      alert("You have to choose your size of product before adding to cart");
    } else {
      const currentCartItem = products.filter((x) => x.id === productValue.id);
      const cartValues = [...cartItems];
      const alreadyInCart = cartItems.every((item) => {
        return item.id !== productValue.id;
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
        : a.id < b.id
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
    setSearchTerm(search);
  };
  console.log(orderDetails);
  const productContextData = {
    updateProduct,
    removeProduct,
    addProduct,
    setProducts,
    products,
    size,
    sort,
    category,
    cartItems,
    setCartItems,
    productFilter,
    totalPrice,
    setTotalPrice,
    handleSortProducts,
    handleFilterProducts,
    handleSortCategory,
    handleAddToCart,
    handleAddToCartFromDetails,
    handleAddClick,
    handleRemoveClick,
    handleRemoveProduct,
    handleSearchSubmit,
    handleClearAll,
    productFiltered,
    isFilter,
    setSize,
    setCategory,
    cartItems,
    setIsFilter,
    orderedItems,
    deleteOrder,
    // takeOrderValues,
    orderDetails,
    setOrderDetails,
    saveOrder,
  };
  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
