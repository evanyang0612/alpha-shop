import React, { useContext } from "react";

import { Context } from "../../Context";

export default function Shipping() {
  const { setShippedByDHL } = useContext(Context);
  return (
    <section className="form-container col col-12">
      <form className="col col-12" data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body col col-12">
          <label className="radio-group col col-12" data-price="0">
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              defaultChecked
              onClick={() => setShippedByDHL(false)}
            />
            <div className="radio-info">
              <div className="col col-12">
                <div className="text">標準運送</div>
                <div className="price">免費</div>
              </div>
              <div className="period col col-12">約 3~7 個工作天</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
          <label className="radio-group col col-12" data-price="500">
            <input
              id="shipping-dhl"
              type="radio"
              name="shipping"
              onClick={() => setShippedByDHL(true)}
            />
            <div className="radio-info">
              <div className="col col-12">
                <div className="text">DHL 貨運</div>
                <div className="price">$500</div>
              </div>
              <div className="period col col-12">48 小時內送達</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
        </section>
      </form>
    </section>
  );
}
