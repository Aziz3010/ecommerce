import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg } = styles;

const Product = ({productData}: {productData: TProduct}) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={productData?.img}
          alt={productData?.title}
        />
      </div>
      <h2>{productData?.title}</h2>
      <h3>{productData?.price}</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;