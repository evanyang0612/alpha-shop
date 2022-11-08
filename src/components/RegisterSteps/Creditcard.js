import React from "react";

export default function Creditcard() {
  return (
    <section className="form-container col col-12">
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <label className="input-label">持卡人姓名</label>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <label className="input-label">卡號</label>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <label className="input-label">有效期限</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <label className="input-label">CVC / CCV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}
