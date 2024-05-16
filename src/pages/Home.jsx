import React from 'react'
import AccountCardElement from '../components/AccountCardElement'
import '../styles/Home.css'
const Home = () => {
  return (
    <>
    <h1>Welcome, Melba!</h1>
    <div className="card--container">
      <AccountCardElement />
      <AccountCardElement />
    </div>
    </>
  )
}

export default Home