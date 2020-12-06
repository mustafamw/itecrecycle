import React from 'react';
import './DataDestruction.scss';
import hardDrive from '../../assets/img/resources/hard-drive.png';

class DataDestructionView extends React.Component {
  render() {
    return (
      <div className="recycle-scheme">
        <section>
          <div className="container">
            <div className="col-12">
              <h1 className="title p-0 pb-2">Secure Data Destruction</h1>
            </div>
            <div className="row">
              <div className="col-9">
                <p>
                  Itec Recycle offer 100% secure data erasure to guarantee your files are eliminated. Whether it be on-site or off-site, 
                  we are able to securely destroy your data and issue serial number tied Data Destruction Certificates.
                </p>
              </div>
              <div className="col-3">
                <img srcSet={hardDrive} alt="Hard Drive" />
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div className="col-12">
              <h2>Certification</h2>
              <p>
                All hard disks and solid state drives subjected to data destruction will have serial number tied certificates of Data Destruction issued. 
                These certificates are then embedded within your asset report which you can use for compliance and auditing purposes. 
                For more information on our Asset Reporting & Certification, click here.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="col-12">
              <h2>Software Wiping</h2>
              <p>
                Innovent uses the HMG Infosec Standard 5 Enhanced (3 pass, verify) erasure method to wipe all data bearing devices. 
                This is the current recognised UK standard by Her Majesty's Government. Overwriting involves three passes; 
                each sector is overwritten first with 1s, then with 0s, and then with randomly generated 1s and 0s. 
                It is impossible to retrieve data once devices have been overwritten using this method; the process is irreversible. 
                Any devices that fail during wiping, or do not pass a health check, will be shredded to ensure total destruction of client data.
              </p>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default DataDestructionView;
