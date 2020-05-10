import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'

function PintBuy(props) {
  return (
    <React.Fragment>
      <div className="cardClass">
        <Card style={{
          width: "18rem",
          overflow: "hidden",
          borderRadius: "15px",
          marginTop: "15px",
          marginBottom: "15px",
        }}>
          <form onSubmit={props.formSubmissionHandler2}>
            <p>Buy a Pint</p>
            {/* /* <select>
          <option value="1" >1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select> */}
            {/* <input type="text" name="counter" /> */}
            <button type='submit'>Buy</button>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
}
PintBuy.propTypes = {
  formSubmissionHandler2: PropTypes.func,
  buttonText: PropTypes.string
};

export default PintBuy;
