import React from "react";
import ReusableForm from "./ReusableForm";




function EditNewTicket(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({ brand: event.target.brand.value, flavor: event.target.flavor.value, description: event.target.description.value, price: event.target.price.value, pay: 0, id: ticket.id });
  }



  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTicketFormSubmission} /* new code */
        buttonText="Update Ticket" />

    </React.Fragment>
  );
}


export default EditNewTicket;