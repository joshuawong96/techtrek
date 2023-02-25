import React from 'react'
import ClaimCard from '../components/ClaimCard'
import { useClaimContext } from '../hooks/useClaimContext'

const DashboardPage = () => {
  const { claims, dispatch } = useClaimContext()

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