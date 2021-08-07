import React from 'react';
import './DataDestruction.scss';
import hardDrive from '../../assets/img/resources/harddrive.jpg';
import certification from '../../assets/img/resources/certification.png';
import software from '../../assets/img/resources/software.jpg';

class DataDestructionView extends React.Component {
  render() {
    return (
      <div className="recycle-scheme pt-2">
        <section className="pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-2">
                <h1 className="title pt-0">Secure Data Destruction</h1>
                <p>
                  Itec Recycle offer 100% secure data erasure to guarantee your files are eliminated. Whether it be on-site or off-site, 
                  we are able to securely destroy your data and issue serial number tied Data Destruction Certificates.<br/><br/>
                  Because data breaches have become more common, companies are seeking to proactively manage digital data both in their live environment 
                  and on retired assets. iTec Data destruction is being mandated more frequently today across large and small companies. Remove all data security risks associated with transporting data bearing assets.
                </p>
                <ul>
                  <li>Regularly scheduled collection or on-demand service</li>
                  <li>A secure chain of custody at every touchpoint</li>
                  <li>A certificate of hard drive destruction after each service</li>
                  <li>Material is securely recycled with approved partners</li>
                </ul>
              </div>
              <div className="pt-1 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-1">
                <img srcSet={hardDrive} alt="Secure Data Destruction" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-3 pb-3 white">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-2 order-sm-2 order-md-2 order-lg-2 order-xl-2">
                <h2 className="title pt-0">Certification</h2>
                <p>
                  All hard disks and solid state drives subjected to data destruction will have serial number tied certificates of Data Destruction issued. 
                  These certificates are then embedded within your asset report which you can use for compliance and auditing purposes. 
                  For more information on our Asset Reporting & Certification, click here.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-1 order-sm-1 order-md-1 order-lg-1 order-xl-1">
                <img srcSet={certification} alt="Secure Data Destruction" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-3 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-2">
                <h2 className="title pt-0">Software Wiping</h2>
                <p>
                  Innovent uses the HMG Infosec Standard 5 Enhanced (3 pass, verify) erasure method to wipe all data bearing devices. 
                  This is the current recognised UK standard by Her Majesty's Government. Overwriting involves three passes; 
                  each sector is overwritten first with 1s, then with 0s, and then with randomly generated 1s and 0s. 
                  It is impossible to retrieve data once devices have been overwritten using this method; the process is irreversible. 
                  Any devices that fail during wiping, or do not pass a health check, will be shredded to ensure total destruction of client data.
                </p>
              </div>
              <div className="pt-1 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-1">
                <img srcSet={software} alt="Software Wiping" />
              </div>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default DataDestructionView;
