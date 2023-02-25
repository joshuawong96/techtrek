import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
const current = new Date;
const date = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;
const CreateClaimPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [dateOfExpense, setDateOfExpense] = useState("");
  const [claimAmount, setClaimAmount] = useState("");
  const [purposeOfExpense, setPurposeOfExpense] = useState("");
  const [isFollowUpClaim, setIsFollowUpClaim] = useState(false);
  const [previousClaimID, setPreviousClaimID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = "Pending";
    const Claim = 
    { InsureanceID: insurancePolicyNumber,
      FirstName: firstName, 
      LastName: lastName,
      ExpenseDate: dateOfExpense,
      Amount: claimAmount,
      Purpose: purposeOfExpense,
      FollowUp: isFollowUpClaim?1:0,
      receiptNumber,
      PreviousClaimID: previousClaimID,
      Status: status,
      LastEditedClaimDate: current
    };
    const response = await fetch('/createClaim', {
      method: 'POST',
      body: JSON.stringify(Claim),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({type: 'CREATE_CLAIM', payload: json})
    }
  };

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

          <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>Submit</button>
            
        </div>
        )};


    export default CreateClaimPage;