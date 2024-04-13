import styles from "./style.module.css";
import Logo from "../../../assets/svg/cart.svg?react";
import { useAppSelector } from "../../../store/hook";
import { getCartTotalQuantitySelector } from "../../../store/cart/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { basketContainer, basketQuantity, pumpBasketQuantity, basketCart } =
  styles;

const HeaderBasket = () => {
  const navigate = useNavigate();
  const totalQuantity: number = useAppSelector(getCartTotalQuantitySelector);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!totalQuantity) return;
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer} onClick={() => navigate("/cart")}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={`${basketQuantity} ${isAnimate && pumpBasketQuantity}`}>
          {totalQuantity}
        </div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
