import React from "react";
import contacts from "./Contacts";


function Contents(){
  return <div class="grid">

  {contacts.map((item,index)=>(
  <div class="box">
  <div class="banner">
  <img
  src={item.Image}
  alt="NA"/>
  </div>
  <div class="details">
  <h6>NAME : {item.Name}</h6>
  <h6>Tel : {item.Tel}</h6>
  </div>
  </div>
))}

</div>
}

export default Contents;
