import React from 'react';
import './Activate';
import LoginComponent from '../../components/login/Login';
import { connect } from 'react-redux';
import {
  activate,
} from '../../redux/actions/activate/activate';
import { withRouter } from "react-router-dom";
import { isEmpty } from 'lodash'

class ActivateView extends React.Component {
  constructor(props) {
    super(props);
    this.props.activate(this.props.match.params.token);
  }
  
  render() {

    const { loaded, errors } = this.props;

    if(loaded && !isEmpty(errors)) {
      this.props.history.push('/login');
    }

    return(
      <LoginComponent />
    );
  }
}

const mapStateToProps = (state) => {
  const { activate } = state;
  return { ...activate }
}

const mapDispatchToProps = dispatch => ({
  activate: (token) =>  { dispatch(activate({ Authorization: `Bearer ${token}` })) },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivateView));