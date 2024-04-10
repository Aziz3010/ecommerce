import { Col, Container, Row } from "react-bootstrap"
import Product from "../components/eCommerce/Product/Product"
import { useAppDispatch, useAppSelector } from "../store/hook"
import { useEffect } from "react";
import { actGetProductsByCatPrefix } from "../store/products/productsSlice";

const Products = () => {
  const dispatch = useAppDispatch();
  const {records, loading, error} = useAppSelector((state) => state.products);

  useEffect(()=>{
    dispatch(actGetProductsByCatPrefix());
  }, [dispatch]);

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