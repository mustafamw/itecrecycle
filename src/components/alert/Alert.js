import React from 'react';
import './Alert.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeAlert } from '../../redux/actions/alert/alert';

class AlertComponent extends React.Component {
    render() {
        const { alert, removeAlert } = this.props;
        const alerts = alert.map((e, index) => {
          return (
            <div className={`alert alert-${e.type} rounded-0`} role="alert" key={index}>
              <div className="row">
                <div className="col-11">
                  { e.message }
                </div>
                <div className="col-1 text-align-right">
                  <FontAwesomeIcon icon="times" onClick={ () => { removeAlert(index); } } />
                </div>
              </div>
            </div>
          );
        });
        return (
          <div className="alerts">
            { alerts }
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  const { alert } = state;
  return { ...alert }
}

const mapDispatchToProps = dispatch => ({
  removeAlert: (index) => dispatch(removeAlert(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);
