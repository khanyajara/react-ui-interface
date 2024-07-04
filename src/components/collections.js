import React from "react";
import { useState } from "react";
import Info from './Info'

function collection () {


   





   return(
    
    <div class="row">
  <div class="column" >
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column" >
    <h2>Fall Limited Edition <br></br> Sneakers</h2>
    <p className="fontB">These low-profile sneakers are your perfect<br></br> casusl wear companion.Featuring a durable<br></br> rubber outer sole, they'll withstand <br></br> everything the weather can offer. </p>
    <h2>$125.00<button className="box">50%</button> </h2>
   <div><Info/></div>
   

  </div>
</div>

   )



}

export default collection;