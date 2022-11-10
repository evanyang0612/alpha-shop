import React, { useContext } from "react";
import StepProgress from "./StepProgress";
import Address from "./RegisterSteps/Address";
import Shipping from "./RegisterSteps/Shipping";
import Creditcard from "./RegisterSteps/Creditcard";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";

import { Context } from "../Context";

export default function Main(props) {
  const { steps } = useContext(Context);

  return (
    <main className="site-main">
      <div className="main-container">
        {/* Register */}
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase={steps}
          data-total-price="0"
        >
          {/* Register-title */}
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress />
          {steps === 1 && <Address />}
          {steps === 2 && <Shipping />}
          {steps === 3 && <Creditcard />}
          <ProgressControl />
        </section>
        {/* Cart */}
        <Cart itemCount={props.itemCount} setItemCount={props.setItemCount} />
      </div>
    </main>
  );
}
