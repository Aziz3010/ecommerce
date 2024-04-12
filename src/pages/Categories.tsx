import { Container } from "react-bootstrap";
import Category from "../components/eCommerce/Category/Category";
import { useAppDispatch, useAppSelector } from "../store/hook";
import actGetCategories from "../store/categories/act/actGetCategories";
import { useEffect } from "react";
import Status from "../components/feedback/Status/Status";
import GridList from "../components/common/GridList/GridList";
import Heading from "../components/common/Heading/Heading";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records?.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Status status={loading} error={error}>
        <Heading headingText="categories" />
        <GridList
          records={records}
          renderItem={(record) => <Category categoryData={record} />}
        />
      </Status>
    </Container>
  );
};

export default Categories;
