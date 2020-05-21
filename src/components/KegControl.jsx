import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import BuyPintForm from './BuyPintForm';
import PropTypes from "prop-types";
// import { kegFakeService } from './FakeKegService';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux';
import * as a from './../actions';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // masterKegList: kegFakeService(),
      selectedKeg: null,
      editing: false,
      buying: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // handleBuy = () => {

  //   const buyKeg = this.state.masterKegList.map((keg) => {
  //     if (keg.id !== this.state.selectedKeg.id) {
  //       return keg;
  //     }
  //     return {
  //       ...keg,
  //       pints: keg.pints - 1,
  //       pay: keg.pay + parseInt(keg.price),

  //     };
  //   });
  //   this.setState({ masterKegList: buyKeg, editing: true });
  // }
  handleBuy = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'BUY_PINT',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: a.TOGGLE_FORM
      }
      dispatch(action);
    }
  }
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { flavor, brand, description, pints, pay, price, id } = newKeg;
    const action = {
      type: a.ADD_KEG,
      flavor: flavor,
      brand: brand,
      description: description,
      price: price,
      pints: pints,
      pay: pay,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: a.TOGGLE_FORM
    }
    dispatch(action2);
  }


  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: a.DELETE_KEG,
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditClick2 = () => {
    this.setState({ buying: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { flavor, brand, description, pints, pay, price, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      flavor: flavor,
      brand: brand,
      description: description,
      price: price,
      pints: pints,
      pay: pay,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.buying) {
      currentlyVisibleState = <BuyPintForm keg={this.state.selectedKeg} onClicky={this.handleClick} onClickingBuy={this.handleBuy} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
        keg={this.state.selectedKeg}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick}
        onClickingEdit2={this.handleEditClick2} />
      buttonText = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <Container>
        <Row><KegList
          kegList={this.props.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg} />
        </Row>
      </Container>
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
