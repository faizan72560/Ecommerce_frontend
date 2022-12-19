import React from 'react'

const ShippingInfo = () => {
  return (
    <div>
        <div className="row">
    <div className="col-md-8 mb-4">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Biling details</h5>
        </div>
        <div className="card-body" >
          <form>
            
            <div className="form-outline mb-4">
              <input type="text" id="form7Example4" className="form-control" />
              <label className="form-label" for="form7Example4">Address</label>
            </div>
  
            
            <div className="form-outline mb-4">
              <input type="text" id="form7Example5" className="form-control" />
              <label className="form-label" for="form7Example5">City</label>
            </div>
  
            {/* <!-- Number input --> */}
            <div className="form-outline mb-4">
              <input type="text" id="form7Example6" className="form-control" />
              <label className="form-label" for="form7Example6">State</label>
            </div>
  
            {/* <!-- Message input --> */}
            <div className="form-outline mb-4">
              <input type="text" id="form7Example6" className="form-control" />
              <label className="form-label" for="form7Example6">Country</label>
            </div>
            <div className="form-outline mb-4">
              <input type="number" id="form7Example6" className="form-control" />
              <label className="form-label" for="form7Example6">Pincode</label>
            </div>

            <div className="form-outline mb-4">
              <input type="number" id="form7Example6" className="form-control" />
              <label className="form-label" for="form7Example6">Phone No</label>
            </div>
  
  
        
            <div className="form-check d-flex justify-content-center mb-2">
              {/* <input className="form-check-input me-2" type="checkbox" value="" id="form7Example8" checked /> */}
              <label className="form-check-label" for="form7Example8">
                <button className='btn btn-primary'>Submit</button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ShippingInfo