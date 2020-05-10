import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


function Keg(props) {
  return (
    <React.Fragment>
      <Col>
        <Card style={{
          width: "18rem",
          overflow: "hidden",
          borderRadius: "15px",
          marginTop: "15px",
          marginBottom: "15px",
        }}>
          <div onClick={() => props.whenKegClicked(props.id)}>


            <Card.Body>
              <Card.Title>{props.brand} {props.flavor}</Card.Title>
              <Card.Text>
                <p>{props.description}</p>

                <div style={{ fontStyle: 'italic' }}>You have {props.pints} left</div>
                <div style={{ fontStyle: 'italic' }}>This item is ${props.price} a pint</div>
                <div>This keg has made ${props.pay}</div>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </Col>

    </React.Fragment >
  );
}

Keg.propTypes = {
  flavor: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  pints: PropTypes.string,
  pay: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;



