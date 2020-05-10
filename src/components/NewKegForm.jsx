import React from "react";
import { v4 } from 'uuid'; // new code
import ReusableForm from "./ReusableForm";


function NewKegForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="New Keg" />
    </React.Fragment>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ brand: event.target.brand.value, flavor: event.target.flavor.value, description: event.target.description.value, price: event.target.price.value, pints: 100, pay: 0, id: v4() });
  }
}




export default NewKegForm;