import React from "react";
import Chip from "./img/emv.jpg";
import Visa from "./img/Visa.jpg";
import Triangle from "./img/Triangle.svg";

function CreditCard() {
  return (
    <div>
      <div className="credit-card-Title">
        <h1>CREDIT CARD</h1>
      </div>
      <img className="credit-card-EMVShip" src={Chip} alt="emvShip" />

      <div className="crd-Content">
        <div>
          <div className="credit-card-Number">1234448888455558888</div>
          <div className="credit-card-Info">
            <div>5432</div>
            <div className="crd-ref">
              <div className="crd-valid">
                <div>VALID</div>
                <div>THRU</div>
              </div>
              <div className="crd-valid">
                <img src={Triangle} alt="icon" />
              </div>
              <div className="crd-crea">
                <div>MONTH/YEAR</div>
                <div className="crd-crea-time">11/50</div>
              </div>
            </div>
          </div>
          <div className="credit-card-Holder">CARDHOLDER</div>
        </div>

        <img className="credit-card-Visa" src={Visa} alt="MasterCardVisa" />
      </div>
    </div>
  );
}

export default CreditCard;
// const CreditCard = () => {
//     return (

//     )
// }

// class CreditCard extends React.Component {
//     render () {
//         return (
//             <h1>Hi</h1>
//         )
//     }
// }.
