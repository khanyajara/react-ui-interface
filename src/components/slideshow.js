import React from "react";
import Data from '../slidedata.js'
import image1 from '../images/Product-1.jpg';
import image2 from '../images/Product-2.jpg';
import image3 from '../images/Product-3.jpg';
import image5 from '../images/Product-1-thumbnail.jpg';
import image6 from '../images/Product-2-thumbnail.jpg';
import image7 from '../images/Product-3-thumbnail.jpg';
import image8 from '../images/Product-4-thumbnail.jpg';
import '../css/slideshow.css'
import slidedata from "../slidedata.js";




function slides (){
  return(
<div className="card" >
    <div className="flex">
        <img src={image1}/>
    </div>
    <div className="bottom">
        <div className="smallbox">
        <p><span className="boxbox"><button className="butt" ><img className="img" src={image5}/></button></span></p>
        </div>
        <div className="smallbox">
            <p><span className="boxbox"><button className="butt" ><img className="img" src={image6}/></button></span></p>
        </div>
        <div className="smallbox">
            <p><span className="boxbox"><button className="butt" ><img className="img" src={image7}/></button></span></p>
        </div>
        <div className="smallbox">
            <p><span className="boxbox"><button className="butt"  ><img className="img" src={image8}/></button></span></p>
           
        </div>
    </div>
</div>
  )
}

export default slides;