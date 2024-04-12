import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { addToCart } from "../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../store/hook";
import { useEffect, useState } from "react";
const { product, productImg, productPriceAndMax } = styles;

const Product = ({ productData }: { productData: TProduct }) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

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
      <div className={productPriceAndMax}>
        <h3>{productData?.price}</h3>
        {/* <h4>Available: {productData?.max}</h4> */}
      </div>

      <Button
        onClick={addToCartHandler}
        variant="info"
        style={{ color: "white" }}
        disabled={isDisabled}
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
