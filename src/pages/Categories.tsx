import { Col, Container, Row } from "react-bootstrap"
import Category from "../components/eCommerce/Category/Category"
import { useAppDispatch, useAppSelector } from "../store/hook";
import actGetCategories from "../store/categories/act/actGetCategories";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const {records, loading, error} = useAppSelector((state) => state.categories);

  useEffect(()=>{
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {records?.map((record: TCategory) => (
          <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
            <Category categoryData={record} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Categories