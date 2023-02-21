import { Col, Row, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeToFav } from "../redux/actions";

const Favourites = () => {
  const favouritesContent = useSelector(state => state.fav.favourites.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ListGroup style={{ listStyle: "none" }}>
          {favouritesContent.map((job, i) => (
            <ListGroupItem key={i} className="my-4">
              <Button variant="danger" onClick={() => dispatch(removeToFav(i))}>DELETE</Button>
              <a href={job.url}>{job.title}</a>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Favourites;