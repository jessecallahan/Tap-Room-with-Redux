import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
// import CardDeck from 'react-bootstrap/CardDeck'



function KegList(props) {

  return (
    <React.Fragment>
      <div padding="10px" margin="10px"></div>
      <hr />
      {Object.values(props.kegList).map((keg) => {



        return <Keg
          whenKegClicked={props.onKegSelection}
          flavor={keg.flavor}
          brand={keg.brand}
          description={keg.description}
          price={keg.price}
          pints={keg.pints}
          pay={keg.pay}
          id={keg.id}
          key={keg.id} />

      })}

    </React.Fragment >
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;
