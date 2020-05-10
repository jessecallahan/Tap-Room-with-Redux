import React from "react";
import ReusableForm from "./ReusableForm";




function EditNewKeg(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({ brand: event.target.brand.value, flavor: event.target.flavor.value, description: event.target.description.value, price: event.target.price.value, pints: 100, pay: 0, id: keg.id });
  }



  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}


export default EditNewKeg;