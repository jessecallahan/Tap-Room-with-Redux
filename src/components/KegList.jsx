import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import CardDeck from 'react-bootstrap/CardDeck'



function KegList(props) {

  return (
    <React.Fragment>
      <div padding="10px" margin="10px"></div>
      <hr />
      {props.kegList.map((ticket) =>

        <CardDeck>

          <Keg
            whenTicketClicked={props.onTicketSelection}
            flavor={ticket.flavor}
            brand={ticket.brand}
            description={ticket.description}
            price={ticket.price}
            pints={ticket.pints}
            pay={ticket.pay}
            id={ticket.id}
            key={ticket.id} />
        </CardDeck>
      )}

    </React.Fragment >
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default KegList;
