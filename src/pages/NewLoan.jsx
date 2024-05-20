import React from 'react'
import LoanImage from '../assets/images/imgs/loan_form_image.png'
const NewLoan = () => {
  return (
    <div>
         <div className="form_container">
        <form action="">
          <h6>Select loan</h6>
          <select name="" id="">
           
          </select>
          <h6>Cuenta de origen:</h6>
          <select name="" id="">
            
          </select>
          <h6>Cuenta de origen:</h6>
          <input type="number" />
          <h6>Payment</h6>
          <select name="" id="">
            <option value="BLACK">BLACK</option>
            <option value="GOLD">GOLD</option>
            <option value="PLATINUM">PLATINUM</option>
          </select>
          <div className="button_form--container">
            <button>Apply</button>
            <button>Cancel</button>
          </div>
        </form>
        <div className="image--container">
          <img src={LoanImage} alt="" />
        </div>
      </div>
       
    </div>
  )
}

export default NewLoan