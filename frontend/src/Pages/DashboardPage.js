import React, { useEffect, useState } from 'react'
import ClaimCard from '../components/ClaimCard'
import { useClaimContext } from '../hooks/useClaimContext'
import { useNavigate } from 'react-router-dom';

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

    const uniqueInstrumentType = [...new Set(claims.map((claim) => claim.uniqueInstrumentType))];

    const navigate = useNavigate();
    const createNewClaim = () => {
      // navigate to create claim page
      navigate('/createClaim', uniqueInstrumentType);
    }

  return (
    <div>
      {
        claims.map((claim) => {
          return (
            <ClaimCard key={claim.ClaimID} claim={claim}/>
          )
        })
      }
      <button onClick={createNewClaim}>Create New Claim</button>
    </div>
  )
}

export default DashboardPage