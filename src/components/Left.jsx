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
  const [getForm, getFormData] = useState([]);
  const [center, centerAdd] = useState([]);

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
      getRecepie();
    });
  };

  // GET
  useEffect(() => {
    getRecepie();
  }, []);

  const getRecepie = () => {
    fetch(`http://localhost:8000/recepies`)
      .then((d) => d.json())
      .then((res) => {
        getFormData(res);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/recepies/${id}`, {
      method: "DELETE",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json"
      }
    }).then(() => {
      getRecepie();
    });
  };

  const addItem = (id) => {
    var newArray = getForm.filter((e) => {
      return e.id === id;
    });
    centerAdd(newArray);
    // console.log("l", center);
  };
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
      <div className="center">
        {center.map((e) => (
          <div className="center">
            <div>Dish:-{e.title}</div>
            <div>Ingredints:-{e.ingredients}</div>
            <div>Instructions:-{e.instructions}</div>
            <div
              style={{
                backgroundImage: `url(${e.image})`,
                height: "200px",
                width: "200px",
                marginTop: "-55px"
              }}
            ></div>
          </div>
        ))}
      </div>
      <div>
        {getForm.map((e) => (
          <div className="listName">
            <div onClick={() => addItem(e.id)} className="div1">
              {e.title}
            </div>
            <div className="div2">{e.cook_time}</div>
            {/* <div
              style={{
                backgroundImage: `url(${e.image})`,
                height: "200px",
                width: "200px"
              }}
            ></div> */}
            <button className="div3" onClick={() => handleDelete(e.id)}>
              button
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
