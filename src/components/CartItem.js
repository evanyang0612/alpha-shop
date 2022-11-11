import React from "react";

import { ReactComponent as IconMinus } from "../icons/minus.svg";
import { ReactComponent as IconPlus } from "../icons/plus.svg";

export default function CartItem({
  item,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) {
  return (
    <div
      className="product-container col col-12"
      data-count="0"
      data-price="3999"
      key={item.id}
    >
      <img className="img-container" src={item.img} alt={item.name} />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <IconMinus
              className="product-action minus"
              onClick={handleDecreaseQuantity}
            />
            <span className="product-count">{item.quantity}</span>
            <IconPlus
              className="product-action plus"
              onClick={handleIncreaseQuantity}
            />
          </div>
        </div>
        <div className="price">${item.price}</div>
      </div>
    </div>
  );
}
