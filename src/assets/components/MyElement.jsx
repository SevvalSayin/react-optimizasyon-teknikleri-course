import React from "react"
import MyParagraph from "./MyParagraph";

const MyElement = (props) => {
    console.log("my-element çalıştı");
  return <MyParagraph>{props.show ? "MyElement" : ""}</MyParagraph>;
};


const MemoizedMyElement = React.memo (MyElement);
export default MemoizedMyElement;

/* props.show===props.prevValue.show ? "tekrar render etme " : "" */
