import React from 'react'
import {AiFillApple, AiOutlineAndroid, AiOutlineApple} from 'react-icons/ai';
import {BsArrowUpRight} from 'react-icons/bs';
// import './job.css'

const CorporateInformation = () => {
  return (
    <div>
      <div className="banner-header section-padding valign bg-img bg-fixed img-fluid"
        data-background="https://i.ibb.co/J26y8YG/career2.jpg" style={{
          backgroundImage: `url('https://i.ibb.co/0FJ7nbC/corporate.jpg')`, minHeight: '1000px', width: '100%', backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12  caption align-middle" style={{ marginTop: '400px' }}>
              <h1 style={{ color: 'white', fontSize:'70px' }}>Corporate Information</h1>
              
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{marginTop:'150px'}}>
          <h1 className='mt-5'>MH</h1>
          <p style={{fontSize:'20px'}} className='my-3'>MH  PREMIER  STAFFING  SOLUTIONS</p>
          <strong style={{fontSize:'15px'}} className='my-5'>Internal standards and conditions for Clients:</strong>
          <p className='mt-4' style={{fontSize:'18px',  marginBottom:'200px'}}>submitting their details. We treat all our candidates and clients' information in strict confidence. The Client will be able to select the Candidate that fits the job role. The Client has to describe the type of work the Candidate is required to do, the location and the hours during which he or she would be required to work, including breaks. The Client can set the rate of pay and any other benefits to be offered regarding the relevant position and the paid/unpaid breaks between shifts. The Client can upload and edit a live job, add shifts, and the number of workers needed. The Client must review the hours worked after every shift to approve, edit, or report a no-show. If the hours are not reviewed within 24 hours they will be automatically added to the invoice. Invoices are sent every week. If payment is not made accordingly, then all contractors will be withdrawn. The Client must announce employee cancellations within 24 hours; otherwise, a minimum of six hours will be charged. After a Recruitment brief and introduction, our Client has to confirm Our consultants make a reference check for all candidates before the Terms and Conditions.</p>

        </div>

      </div>
      )
}

      export default CorporateInformation
