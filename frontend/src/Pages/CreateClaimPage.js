import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
const current = new Date;
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
const CreateClaimPage = () => {
    return (
        <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="receipt-number" class="form-label">Receipt No.</label>
              <input type="text" class="form-control" id="receipt-number" placeholder="" value="" required="" />
            </div>
            

            <div class="col-md-5">
              <label for="date-of-expense">Date of Expense:</label>
              <input type="date" id="start" name="date-of-expense" value="2018-07-22" min="2000-01-01" max={date} />
            </div>
  
            <div class="col-7">
              <label for="claim-amount" class="form-label">Receipt No.</label>
              <input type="text" name="currency-field" id="claim-amount" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder=""/>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">Purpose of Expense</label>
              <textarea type="text" class="k-textbox"></textarea>
            </div>
        </div>) 
    };

    // ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));

    export default CreateClaimPage;