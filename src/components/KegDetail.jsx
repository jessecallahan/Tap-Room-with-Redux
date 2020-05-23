import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'

function KegDetail(props) {
  const { keg } = props; //new code

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
          <h5>Keg Detail</h5>
          <h3>{keg.brand} {keg.flavor}</h3>
          <p>{keg.description}</p>
          <div style={{ fontStyle: 'italic' }}>You have {keg.pints} left</div>
          <div style={{ fontStyle: 'italic' }}>This item is ${keg.price} a pint</div>
          <div>This keg has made ${keg.pay}</div>
          <br></br>
          {/* <button onClick={props.onClickingEdit2}>Buy a Pint</button> */}
          <button onClick={props.onClickingEdit}>Update Keg</button>
          <button onClick={() => props.onClickingDelete(keg.id)}>Delete Keg</button>
          <hr />
        </Card>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingEdit2: PropTypes.func
};

export default KegDetail;