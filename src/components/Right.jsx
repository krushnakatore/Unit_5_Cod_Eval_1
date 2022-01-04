// import "./Right.css";
// import { useEffect, useState } from "react";

// export const Right = () => {
//   const [getForm, getFormData] = useState([]);
//   const [g, setG] = useState([]);

//   useEffect(() => {
//     getRecepie();
//   }, []);

//   const getRecepie = () => {
//     fetch(`http://localhost:8000/recepies`)
//       .then((d) => d.json())
//       .then((res) => {
//         getFormData(res);
//       });
//   };
//   // console.log(getForm);

//   const handleAdd = (id) => {
//     var newArray = getForm.filter((e) => {
//       return e.id === id;
//     });
//     setG(newArray);
//     console.log("l", g);
//   };
//   return (
//     <div className="right">
//       {getForm.map((e) => (
//         <div className="flex">
//           <span>Titte:-{e.title}</span>
//           <span>Ingredients:-{e.ingredients}</span>
//           <span>Time_required:-{e.cook_time}</span>
//           <span
//             style={{
//               backgroundImage: `url(${e.image})`,
//               height: "200px",
//               width: "200px"
//             }}
//           ></span>
//           <span>Instructions{e.instructions}</span>
//           <button onClick={() => handleAdd(e.id)}>button</button>
//         </div>
//       ))}
//       {g.map((e) => (
//         <>
//           <div>{e.title}</div>
//           <div
//             style={{
//               backgroundImage: `url(${e.image})`,
//               height: "200px",
//               width: "200px"
//             }}
//           ></div>
//         </>
//       ))}
//     </div>
//   );
// };
