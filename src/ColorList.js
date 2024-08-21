import { Link } from "react-router-dom";
import { Container, Row, ListGroup } from "react-bootstrap";

const ColorList = ({ colorList }) => {
  return (
    <div className='ColorList'>
      <Container>
        <Row>
          <div className='ColorList-Title'>
            <h1>Welcome to the color factory.</h1>
            <Link to='/colors/new'>Add a color</Link>
          </div>
        </Row>
        <Row>
          <div className='ColorList-options'>
            <p>Please select a color.</p>
            <ListGroup>
              {colorList.map((c) => (
                <ListGroup.Item key={c.name}>
                  <Link to={`/colors/${c.name}`}>{c.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ColorList;
