import React from 'react'
import '../css/ClaimCard.css'
import 'material-symbols'

const ClaimCard = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card-left-container">
          <h2 className="card-title">ClaimID:</h2>
          <h3 className="card-subtitle">InsuranceID:</h3>
          <h3 className="card-subtitle">Purpose:</h3>
          <h3 className="card-subtitle">Amount:</h3>
        </div>
        <div className="card-right-container">
          <div className="card-button-container">
            <div className="card-button-bg"><span className="material-symbols-outlined">edit</span></div>
            <div className="card-button-bg"><span className="material-symbols-outlined">delete</span></div>
          </div>
          <div className="card-status-div rejected">status</div>
        </div>
      </div>
    </div>
  )
}

export default ClaimCard