import React from "react";
import PintBuy from './PintBuy'



function BuyPintForm(props) {


  function handlePintFormSubmission(event) {
    props.onClickingBuy(this.id)
    props.onClicky()
    event.preventDefault();
  }


  return (
    <React.Fragment>
      <PintBuy
        formSubmissionHandler2={handlePintFormSubmission} />
    </React.Fragment>
  );
}


export default BuyPintForm;