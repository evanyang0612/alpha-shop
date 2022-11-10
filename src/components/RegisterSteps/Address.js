import React, { useContext } from "react";
import { Context } from "../../Context";

export default function Address() {
  const { formData, handleFormChange } = useContext(Context);
  return (
    <section className="form-container col col-12">
      <form className="col col-12" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-s1">
              <label className="input-label" htmlFor="userTitle">
                稱謂
              </label>
              <div className="select-container">
                <select
                  id="userTitle"
                  value={formData.userTitle}
                  onChange={handleFormChange}
                  name="userTitle"
                >
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="input-group input-w-lg-4 input-w-sm-s2">
              <label className="input-label" htmlFor="userName">
                姓名
              </label>
              <input
                type="text"
                placeholder="請輸入姓名"
                onChange={handleFormChange}
                name="userName"
                value={formData.userName}
                
              />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <label className="input-label" htmlFor="userPhone">
                電話
              </label>
              <input
                type="tel"
                placeholder="請輸入行動電話"
                onChange={handleFormChange}
                name="userPhone"
                value={formData.userPhone}
              />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <label className="input-label" htmlFor="userEmail">
                Email
              </label>
              <input
                type="email"
                placeholder="請輸入電子郵件"
                onChange={handleFormChange}
                name="userEmail"
                value={formData.userEmail}
              />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-full">
              <label className="input-label" htmlFor="userCity">
                縣市
              </label>
              <div className="select-container">
                <select
                  required
                  id="userCity"
                  value={formData.userCity}
                  onChange={handleFormChange}
                  name="userCity"
                >
                  <option value="">請選擇縣市</option>
                  <option value="KLU">基隆市</option>
                  <option value="TPH">新北市</option>
                  <option value="TPE">臺北市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="HSC">新竹市</option>
                  <option value="MAC">苗栗市</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">臺中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="CWS">彰化市</option>
                  <option value="NTC">南投市</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="CYI">嘉義市</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="PTS">屏東市</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="ILC">宜蘭市</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="HWC">花蓮市</option>
                  <option value="TTC">臺東市</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option>
                </select>
              </div>
            </div>
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <label className="input-label" htmlFor="userAddress">
                地址
              </label>
              <input
                type="text"
                placeholder="請輸入地址"
                onChange={handleFormChange}
                name="userAddress"
                value={formData.userAddress}
              />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}
