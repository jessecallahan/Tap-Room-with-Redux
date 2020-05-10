import React from "react";
import PintBuy from './PintBuy'



function BuyPintForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission2(event) {
    props.onClickingBuy(ticket.id)
    props.onClicky()
    event.preventDefault();
    console.log(ticket.id)
    // props.counter({ counter: event.target.counter.value })
    //props.onEditTicket({ name: ticket.name, location: ticket.location, issue: ticket.issue, inventory: ticket.inventory, id: ticket.id });
  }


  return (
    <React.Fragment>
      <PintBuy
        formSubmissionHandler2={handleEditTicketFormSubmission2}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}


export default BuyPintForm;