import { Col, Container, Row } from "react-bootstrap"
import Product from "../components/eCommerce/Product/Product"
import { useAppDispatch, useAppSelector } from "../store/hook"
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "../store/products/productsSlice";
import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {records} = useAppSelector((state) => state.products);

  useEffect(()=>{
    dispatch(actGetProductsByCatPrefix(params?.prefix || ""));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Row>
        {records?.map((record)=>(
          <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
            <Product productData={record} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products