import "./styles.css";

import { Left } from "./components/Left";
import { Center } from "./components/Center";
import { Right } from "./components/Right";

export default function App() {
  return (
    <div className="App">
      <Left />
      <Center />
      <Right />
    </div>
  );
}
