import React from 'react'
import '../css/ClaimCard.css'
import 'material-symbols'
import { format } from 'date-fns'
import { useClaimContext } from '../hooks/useClaimContext'

const ClaimCard = ({claim}) => {
  const { claims, dispatch } = useClaimContext()

  // const handleDelete = async () => {
  //   const response = await fetch('/deleteClaim', {
  //     method: 'DELETE',
  //     body: json.stringify({ClaimID: claim.ClaimID}),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //     }
  //   })

    // const json = await response.json()
    // let json = {
    //   ClaimID: 2010,
    //   InsuranceID: 1009,
    //   FirstName: "Martin",
    //   LastName: "Ong",
    //   ExpenseDate: "2022-07-14T08:00:00+08:00",
    //   Amount: 100.00,
    //   Purpose: "Dentist",
    //   FollowUp: 0,
    //   PreviousClaimID: null,
    //   Status: "Approved",
    //   LastEditedClaimDate: "2022-07-15T12:22:45+08:00"
    // }
    console.log('delete claim')

    dispatch({type: "DELETE_CLAIM", payload: claim})

    // if (response.ok) {
    //   // delete from frontend
    //   dispatch({type: "DELETE_CLAIM", payload: json})
    // }
  }

  const handleEdit = () => {
    // edit function here - navigate
  }

  return (
    <div>
      <div className="card-container">
        <div className="card-left-container">
          <h2 className="card-title">InsuranceType:</h2>
          <h3 className="card-subtitle">Purpose: {claim.Purpose}</h3>
          <h3 className="card-subtitle">Expense Date: {format(new Date(claim.ExpenseDate), 'd MMM yyyy')}</h3>
          <h3 className="card-subtitle">ClaimID: {claim.ClaimID}</h3>
          <h3 className="card-subtitle">Amount: ${claim.Amount}</h3>
        </div>
        <div className="card-right-container">
          <div className="card-button-container">
            <div className="card-button-bg">
              <span className="material-symbols-outlined" onClick={handleEdit}>edit</span>
            </div>
            <div className="card-button-bg" onClick={handleDelete}>
              <span className="material-symbols-outlined">delete</span>
            </div>
          </div>
          <div className={"card-status-div " + claim.Status.toLowerCase()}>{claim.Status}</div>
        </div>
      </div>
    </div>
  )
}

export default ClaimCard