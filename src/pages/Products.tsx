import { Container } from "react-bootstrap";
import Product from "../components/eCommerce/Product/Product";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "../store/products/productsSlice";
import { useParams } from "react-router-dom";
import Status from "../components/feedback/Status/Status";
import GridList from "../components/common/GridList/GridList";
import Heading from "../components/common/Heading/Heading";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params?.prefix || ""));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Status status={loading} error={error}>
        <Heading headingText={`${params?.prefix} products`} />

        <GridList
          records={productsFullInfo}
          renderItem={(record) => <Product productData={record} />}
        />
      </Status>
    </Container>
  );
};

export default Products;
