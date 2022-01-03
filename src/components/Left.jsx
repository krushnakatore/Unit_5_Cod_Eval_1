import "./Left.css";
import { useEffect, useRef, useState } from "react";

export const Left = () => {
  const [form, formData] = useState({
    title: "",
    ingredients: "",
    cook_time: "",
    image: "",
    instructions: ""
  });
  // const [getForm, getFormData] = useState([]);

  const fileRef = useRef();

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "image") {
      value = URL.createObjectURL(fileRef.current.files[0]);
    }
    formData({
      ...form,
      [name]: value
    });
  };
  //POST

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/recepies", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json"
      }
    }).then(() => {
      // getForm();
    });
  };

  // GET
  // useEffect(() => {
  //   getRecepie();
  // }, []);

  // const getRecepie = () => {
  //   fetch(`http://localhost:8000/recepies`)
  //     .then((d) => d.json())
  //     .then((res) => {
  //       getFormData(res);
  //     });
  // };
  // console.log(getForm);
  return (
    <div className="left">
      <div className="formDiv">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Enter title"
          />
          <br />
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="ingredients"
            placeholder="Enter Ingredients"
          />
          <br />
          <br />
          <input
            onChange={handleChange}
            type="Number"
            name="cook_time"
            placeholder="Cook time in Minutes"
          />
          <br />
          <br />
          <label> Enter Image</label>
          <input
            onChange={handleChange}
            type="file"
            ref={fileRef}
            name="image"
            placeholder="Enter Image"
          />

          <br />
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="instructions"
            placeholder="Enter Instructions"
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};
