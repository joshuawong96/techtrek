import React, {useState} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
const current = new Date;
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
const CreateClaimPage = () => {
  const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label for="insurance-policy-number" className="form-label">Insurance Policy No.</label>
              <input type="text" className="form-control" id="insurance-policy-number" placeholder="" value="" required="" />
            </div>

            <div className="col-12">
              <label for="receipt-number" className="form-label">Receipt No.</label>
              <input type="text" className="form-control" id="receipt-number" placeholder="" value="" required="" />
            </div>
            

            <div className="col-md-5">
              <label for="date-of-expense">Date of Expense:</label>
              <input type="date" id="start" name="date-of-expense" value="2018-07-22" min="2000-01-01" max={date} />
            </div>
  
            <div className="col-7">
              <label for="claim-amount" className="form-label">Claim Amount</label>
              <input type="number" name="currency-field" id="claim-amount" />
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">Purpose of Expense</label>
              <textarea type="text" className="k-textbox"></textarea>
            </div>

            <div className="col-md-4">
            <label className="form-check-label" for="flexCheckChecked">This is a follow-up claim.</label>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            </div>

            {isChecked && (
              <div>
              <label htmlFor="myInput">Previous claim ID:</label>
            <input type="text" id="myInput" />
              </div>
              )}
            
        </div>
        )};


    export default CreateClaimPage;