import React from 'react';
import { Formik } from 'formik';
import './BookCollection.scss';
import { connect } from 'react-redux';
import { itemsCollection, setItemsCollectionReset } from '../../redux/actions/itemsCollection/itemsCollection';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { isEmpty } from 'lodash';
import { getCookies } from '../../utils/cookies';
import LoginModalComponent  from '../modals/loginModal/LoginModal';
import Tooltip from 'rc-tooltip';
import $ from 'jquery';

const loginModal = 'loginModal';
class BookCollectionComponent extends React.Component {
  componentWillUnmount() {
    this.props.setItemsCollectionReset();
  }

  closeModal(id) {
    $(`#${id}`).modal('hide');
    $('body').removeClass('modal-open');
  }

  render() {
    let { itemsCollectionState, itemsCollection,  loginState } = this.props;
    let { errors: errorsResponse } = itemsCollectionState;
    const { loaded, loading } = itemsCollectionState;
    let errors = errorsResponse ? errorsResponse.errors : {};
    const { isLoggedIn } = loginState;

    if(isLoggedIn) {
      this.closeModal(loginModal)
    }

    return (
      <>
        <div className="col-12 pl-0 pr-0 col-sm-12 col-md-10 col-lg-8 col-xl-6 formik book-collection">
          <Formik
            enableReinitialize={true}
            initialValues={{ 
              computers: 0, 
              laptops: 0,
              monitors: 0,
              servers: 0,
              networking: 0,
              hardDrive: 0,
              mobilePhones: 0,
              landlinePhones: 0,
              tablets: 0,
              printers: 0,
              others: '',
            }}
            validate={values => {
              errors = errorsResponse ? errorsResponse.errors : {}
              if  (errorsResponse) {
                setTimeout(() => {
                  errorsResponse = undefined;
                }, 100);
              }
              let total = 0;
              Object.values(values).forEach((e) => { 
                if(typeof e !== 'number') return;
                total += e;
              });
              if(total === 0 && values.others.length === 0){
                errors.message = 'Please fill out the form...';
              }
              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              if (!isEmpty(errors)){
                return;
              }
              errors = {};
              if (isEmpty(values.mobileNo)) {
                delete values.mobileNo;
              }
              const token = getCookies('jwt');
              itemsCollection(token, values);
              resetForm();
            }}>
            {({
              values,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="pl-0 pr-0 pt-3">
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                      <label>Computers</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.computers && touched.computers && 'input-error'}`}
                        type="number"
                        name="computers"
                        id="computers"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.computers}
                        min="0"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0 pl-1">
                      <label>Laptops</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.lastName && touched.lastName && 'input-error'}`}
                        type="number"
                        name="laptops"
                        id="laptops"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.laptops}
                        min="0"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                      <label>Monitors</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.monitors && touched.monitors && 'input-error'}`}
                        type="number"
                        name="monitors"
                        id="monitors"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.monitors}
                        min="0"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0 pl-1">
                      <label>Servers</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.servers && touched.servers && 'input-error'}`}
                        type="number"
                        name="servers"
                        id="servers"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.servers}
                        min="0"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                      <label>Networking</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.networking && touched.networking && 'input-error'}`}
                        type="number"
                        name="networking"
                        id="networking"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.networking}
                        min="0"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0 pl-1">
                      <label>Hard Drive</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.hardDrive && touched.hardDrive && 'input-error'}`}
                        type="number"
                        name="hardDrive"
                        id="hardDrive"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.hardDrive}
                        min="0"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                      <label>Mobile Phones</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.mobilePhones && touched.mobilePhones && 'input-error'}`}
                        type="number"
                        name="mobilePhones"
                        id="mobilePhones"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobilePhones}
                        min="0"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0 pl-1">
                      <label>Landline Phones</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.landlinePhones && touched.landlinePhones && 'input-error'}`}
                        type="number"
                        name="landlinePhones"
                        id="landlinePhones"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.landlinePhones}
                        min="0"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                      <label>Tablets</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.tablets && touched.tablets && 'input-error'}`}
                        type="number"
                        name="tablets"
                        id="tablets"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tablets}
                        min="0"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0 pl-1">
                      <label>Printers</label>
                      <input
                        className={`form-control p-3 rounded-0 ${errors.printers && touched.printers && 'input-error'}`}
                        type="number"
                        name="printers"
                        id="printers"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.printers}
                        min="0"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Other Equipment (please specify)</label>
                  <textarea
                    className={`form-control p-3 rounded-0 ${errors.others && touched.others && 'input-error'}`}
                    type="number"
                    name="others"
                    id="others"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.others}></textarea>
                </div>
                <div className="form-group">
                  <small className="error">
                    {errors.message && errors.message}
                  </small>
                </div>
                {
                  !isLoggedIn ? 
                  (
                    <>
                      <Tooltip placement="top" trigger={['hover']} overlay={<span>Please Signup/Login to continue booking</span>}>
                        <button type="button" 
                          className="btn btn-primary btn-block btn-lg p-3 rounded-0 disabled" 
                          disabled={false}>
                          Book Item Collection
                        </button>
                      </Tooltip>
                      <button
                        className="btn btn-primary btn-block btn-lg p-3 rounded-0"
                        data-toggle="modal" 
                        data-target="#loginModal" 
                        >Login</button>
                    </>
                    ) : 
                    <>
                      <button type="submit" 
                        className="btn btn-primary btn-block btn-lg p-3 rounded-0" 
                        disabled={loading || !isLoggedIn}>
                        Book Item Collection
                      </button>
                    </>
                }
              </form>
            )}
          </Formik>
        </div>
        <LoginModalComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { itemsCollection: itemsCollectionState, login: loginState  } = state;
  return { itemsCollectionState,  loginState }
}

const mapDispatchToProps = dispatch => ({
  itemsCollection: (token, payload) => dispatch(itemsCollection({ Authorization: `Bearer ${token}` }, payload)),
  setItemsCollectionReset: () => dispatch(setItemsCollectionReset()),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookCollectionComponent));