// import "./nav.css";
import React from "react";
import "./footeritem.css";
import facebook from './img/facebook.svg';
import Vector from './img/Vector.png';
import Vector2 from './img/Vector2.png';
import Vector3 from './img/Vector3.png';
const Items = () => {
    return(
        <div className="footerflex">
          <div className="footer_facebook">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="footer_instagram">
          <img src={Vector} alt="Vector"/>
          </div>
          <div className="footer_p">
            <img src={Vector2} alt="Vector2"/>
          </div>
          <div className="footer_twitter">
            <img src={Vector3} alt="Vector3"/>
          </div>
        </div>
    );
    }

    export default Items;