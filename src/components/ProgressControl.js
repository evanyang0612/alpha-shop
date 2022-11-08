import React, { useContext } from "react";
import { ReactComponent as LeftArrow } from "../icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../icons/right-arrow.svg";

import { Context } from "../Context";

export default function ProgressControl() {
  const { steps, increaseSteps, decreaseSteps } = useContext(Context);

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {steps === 1 && (
        <section className="button-group col col-12" data-phase="address">
          <button className="next" onClick={increaseSteps}>
            下一步
            <RightArrow className="cursor-point svg" />
          </button>
        </section>
      )}

      {steps === 2 && (
        <section className="button-group col col-12" data-phase="shipping">
          <button className="prev" onClick={decreaseSteps}>
            <LeftArrow className="cursor-point svg" />
            上一步
          </button>
          <button className="next" onClick={increaseSteps}>
            下一步
            <RightArrow className="cursor-point svg" />
          </button>
        </section>
      )}

      {steps === 3 && (
        <section className="button-group col col-12" data-phase="credit-card">
          <button className="prev" onClick={decreaseSteps}>
            <LeftArrow className="cursor-pointer svg" />
            上一步
          </button>
          <button className="next">確認下單</button>
        </section>
      )}
    </section>
  );
}
