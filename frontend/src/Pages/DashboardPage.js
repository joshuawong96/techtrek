import React, { useEffect, useState } from 'react'
import ClaimCard from '../components/ClaimCard'
import { useClaimContext } from '../hooks/useClaimContext'

const DashboardPage = () => {
  const { claims, dispatch } = useClaimContext()

  const [isChecked, setIsChecked] = useState(false)

  // get all claims (fetch from API)
  // useEffect(() => {
  //   const fetchClaims = async() => {
  //     const response = await fetch('/getAllClaims', {
  //       method: 'GET',
  //       body: json.stringify({EmployeeID: localStorage.getItem(employeeID)}), // replace with employeeID
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //       }
  //     })
  //     const json = await response.json()
  //   }

  //   if (response.ok) {
  //     dispatch({type: 'GET_CLAIMS', payload: json})
  //   }

  //   fetchClaims()
  // }, [])

  return (
    <div>
      {
        claims.map((claim) => {
          return (
            <ClaimCard key={claim.ClaimID} claim={claim}/>
          )
        })
      }
    </div>
  )
}

export default DashboardPage