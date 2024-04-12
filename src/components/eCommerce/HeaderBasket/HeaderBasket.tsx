import styles from "./style.module.css";
import Logo from "../../../assets/svg/cart.svg?react";
import { useAppSelector } from "../../../store/hook";
import { getCartTotalQuantitySelector } from "../../../store/cart/selectors";
import { useEffect, useState } from "react";

const { basketContainer, basketQuantity, pumpBasketQuantity } = styles;

const HeaderBasket = () => {
  const totalQuantity: number = useAppSelector(getCartTotalQuantitySelector);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    if(!totalQuantity) return;
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={`${basketQuantity} ${isAnimate && pumpBasketQuantity}`}>
        {totalQuantity}
      </div>
    </div>
  );
};

export default HeaderBasket;
