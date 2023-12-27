import { useState } from "react";
import "../App.css";
import Button from "./Button.js";
import Navbar from "./Navbar.js";
import Image from "./Image.js";
import Text from "./Text.js";

function App() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  let buttonText;
  if (isTextVisible === true) {
    buttonText = "Hide text";
  } else {
    buttonText = "Show text";
  }

  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <Button
          onClick={() => {
            setIsTextVisible(!isTextVisible);
          }}
          buttonText={buttonText}
        />
        {isTextVisible ? <Text /> : <div></div>}
        <Image />
      </div>
    </div>
  );
}

export default App;
