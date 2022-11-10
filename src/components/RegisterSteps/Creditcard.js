import React, { useContext } from "react";
import { Context } from "../../Context";

export default function Creditcard() {
  const { handleFormChange, formData } = useContext(Context);
  return (
    <section className="form-container col col-12">
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <label className="input-label">持卡人姓名</label>
              <input
                type="text"
                placeholder="John Doe"
                onChange={handleFormChange}
                name="creditCardName"
                value={formData.creditCardName}
                required
              />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <label className="input-label">卡號</label>
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                onChange={handleFormChange}
                name="creditCardNumber"
                value={formData.creditCardNumber}
                required
              />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <label className="input-label">有效期限</label>
              <input
                type="text"
                placeholder="MM/YY"
                onChange={handleFormChange}
                name="creditCardExpiredDate"
                value={formData.creditCardExpiredDate}
                required
              />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <label className="input-label">CVC / CCV</label>
              <input
                type="text"
                placeholder="123"
                onChange={handleFormChange}
                name="creditCardCVC"
                value={formData.creditCardCVC}
                required="required"
              />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}
