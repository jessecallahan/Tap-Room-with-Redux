import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'

function ReusableForm(props) {
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
          <form onSubmit={props.formSubmissionHandler}>
            <div>Brand:<input
              type='brand'
              name='brand'
              placeholder='Brand name goes here...' /></div>
            <div>Flavor:<input
              type='flavor'
              name='flavor'
              placeholder='Please type flavor...' /></div>
            <div>Description:<input
              type='description'
              name='description'
              placeholder='Describe your soda...' /></div>
            <div>Price:<input
              type='price'
              name='price'
              placeholder='Price per pint...' /></div>
            <br></br>
            <button type='submit'>{props.buttonText}</button>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;