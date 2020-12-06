import React from 'react';
import './ResetPassword.scss';
import ResetPasswordComponent from '../../components/resetPassword/ResetPasswords';
import { connect } from 'react-redux';
import {
  resetPasswordValid,
} from '../../redux/actions/resetPasswordValid/resetPasswordValid';
import { withRouter } from "react-router-dom";
import { isEmpty } from 'lodash'

class ResetPaswordView extends React.Component {
  constructor(props) {
    super(props);
    this.props.resetPasswordValid(this.props.match.params.token);
  }

  render() {

    const { loaded, data, errors } = this.props;

    if(loaded && !isEmpty(errors)) {
      this.props.history.push('/login');
    }

    return(
      <div className="container">
        <ResetPasswordComponent token={this.props.match.params.token} />
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  const { resetPasswordValid } = state;
  return { ...resetPasswordValid }
}

const mapDispatchToProps = dispatch => ({
  resetPasswordValid: (token) =>  { dispatch(resetPasswordValid({ Authorization: `Bearer ${token}` })) },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPaswordView));