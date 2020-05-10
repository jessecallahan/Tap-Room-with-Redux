import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import BuyPintForm from './BuyPintForm'
import { v4 } from 'uuid';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      counter: 0,
      masterTicketList: [
        {
          brand: 'Jimbo\'s',
          flavor: 'Root Beer',
          description: 'Good Ol\' Fashioned Root Beer',
          price: 4.00,
          pints: 100,
          pay: 0,
          id: v4()
        },
        {
          brand: 'Rick\'s',
          flavor: 'Cola',
          description: 'Classic Cola Taste',
          price: 3.00,
          pints: 100,
          pay: 0,
          id: v4()
        },
        {
          brand: 'Cindy\'s',
          flavor: 'Lemon Lime Soda',
          description: 'Great Twist of Lemon & Lime',
          price: 2.00,
          pints: 100,
          pay: 0,
          id: v4()
        }
      ],
      selectedTicket: null, // new code
      editing: false, // new code
      buying: false // new code
    };
    this.handleClick = this.handleClick.bind(this); //new code here
  }
  handleBuy = () => {

    const buyItem = this.state.masterTicketList.map((item) => {
      if (item.id !== this.state.selectedTicket.id) {
        return item;
      }
      return {
        ...item,
        pints: item.pints - 1,
        pay: item.pay + parseInt(item.price),

      };
    });
    console.log(buyItem)
    this.setState({ masterTicketList: buyItem, editing: true });
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false, // new code
        buying: false // new code
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({
      masterTicketList: newMasterTicketList,
      formVisibleOnPage: false
    });
  }
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({ selectedTicket: selectedTicket });
  }
  handleDeletingTicket = (id) => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      masterTicketList: newMasterTicketList,
      selectedTicket: null
    });
  }
  handleCounter = (counter) => {
    return (counter)
  }
  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditClick2 = () => {
    console.log("handleEditClick reached!");
    this.setState({ buying: true });
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMasterTicketList = this.state.masterTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    this.setState({
      masterTicketList: editedMasterTicketList,
      editing: false,
      selectedTicket: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.state.buying) {
      currentlyVisibleState = <BuyPintForm ticket={this.state.selectedTicket} counter={this.handleCounter} onClicky={this.handleClick} onClickingBuy={this.handleBuy} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <KegDetail
        keg={this.state.selectedTicket}
        onClickingDelete={this.handleDeletingTicket}
        onClickingEdit={this.handleEditClick}
        onClickingEdit2={this.handleEditClick2} />
      buttonText = "Return to Ticket List";
    }
    else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewKegForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <Container>
        <Row><KegList kegList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
        </Row>
      </Container>

      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */}
      </React.Fragment>
    );

  }

}

export default TicketControl;
