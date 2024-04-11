import { Row, Col } from "react-bootstrap";

type THasId = {id?: number};

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};


const GridList = <T extends THasId>({ records, renderItem }: GridListProps<T>) => {
  const recordsList = records?.length
    ? records?.map((record) => (
        <Col
          key={record?.id}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    : "There are no records";

  return <Row>{recordsList}</Row>;
};

export default GridList;
