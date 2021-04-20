import React from "react";
import contacts from "./Contacts";


function Contents(){
  return <div>


  <div class="box">
  <div class="banner">
  <img
  src={contacts[0].Image}
  alt="NA"/>
  </div>
  <div class="details">
  <h6>NAME : {contacts[0].Name}</h6>
  <h6>Tel : {contacts[0].Tel}</h6>
  </div>
  </div>


  </div>
}

export default Contents;
