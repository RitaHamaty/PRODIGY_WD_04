import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Project({title, desc, techs, img}) {
  return (
    <Card style={{ width: '18rem', height: '24rem', boxShadow: '1px 4px 1px rgb(199, 199, 199)' }}
     className='m-3 p-2'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{techs}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Project;