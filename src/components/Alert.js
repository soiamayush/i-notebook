import React from "react";
import "./Login.css"
import "./Home.css"
import { useLocation } from "react-router";


export default function Alert(props) {

  let location = useLocation();

  
  

    
  const wordchanger = (word)=>{

    if(word === "danger"){
      word = "Error"
    }
    return word;
  }


  return (

    <div style={{ height: "60px" }} className={`${location.pathname==="/" ?  "homecontainer" : "logincontainer"}`} >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible `}
          role="alert"
          id="liveAlert"
        >
           <strong>{wordchanger(props.alert.type)} !! </strong>{props.alert.message}
        </div>
      )}
    </div>
  );
}
