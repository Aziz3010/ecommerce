import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { addToCart } from "../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../store/hook";
import { useEffect, useState } from "react";
const { product, productImg, maximumNotice } = styles;

const Product = ({ productData }: { productData: TProduct }) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const currentRemainingQuantity = productData?.max - (productData?.quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  const addToCartHandler = () => {
    dispatch(addToCart(productData?.id));
    setIsDisabled(true);
  };

  useEffect(() => {
    if (!isDisabled) return;
    const debounce = setTimeout(() => {
      setIsDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isDisabled]);

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={productData?.img} alt={productData?.title} />
      </div>
      <h2 title={productData?.title}>{productData?.title}</h2>
      <h3>{productData?.price.toFixed(2)} EGP</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>

      <Button
        onClick={addToCartHandler}
        variant="info"
        style={{ color: "white" }}
        disabled={isDisabled || quantityReachedToMax}
      >
        {isDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
