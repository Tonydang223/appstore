import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import { useState, useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { ProductContext } from "../../contexts/ProductContext";
import { useHistory } from "react-router-dom";
const Results = () => {
  const { currentUser } = useContext(UsersContext);
  const { addEvualuate } = useContext(ProductContext);
  const history = useHistory();
  const [formValue, setFormValue] = useState({
    content: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setFormValue({ ...formValue, name: currentUser });
  };
  return (
    <>
      <div>
        You successfully ordered your products. The order will be sent to you as
        soon as possible, we will send information about your order by phone's
        text message. Thank you so much for using our services. Have a nice day!
      </div>
      <div style={{ textAlign: "right", marginTop:"8px" }}>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => history.push("/")}
        >
          OK
        </Button>
      </div>
    </>
  );
};

export default Results;
