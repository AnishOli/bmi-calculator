import React, { useState } from 'react'
import './BmiCalculator.css'


const BmiCalculator = () => {

    // state
const[weight, setWeight] = useState(0);
const[height, setHeight] = useState(0);
const[bmi, setBmi]       = useState('');
const[message, setMessage] = useState('');



let calcBmi = (event) => {
  event.preventDefault();

  if (weight === 0 || height === 0) {
    alert('Please enter a valid weight and height');
  } else {
    const heightInMeters = height * 0.3048; // convert feet to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmi(bmi.toFixed(1));
    //Logic for message
    if(bmi<18){
        setMessage('You are underWeight')
    }else if(bmi>=19 && bmi<25){
        setMessage('You are Healthy')

    }else{
        setMessage('You are Overweight')

    }
        
  }
};
// show image based on bmi Calculator
let imgSrc;
if(bmi<1){
    imgSrc=null
}else {
    if(bmi< 18){
        imgSrc= require('../assets/image.png')
    }else if (bmi<25){
        imgSrc = require('../assets/healthybody.png')
    }else{
        imgSrc = require('../assets/overweight.png')
    }


}

let reload = ()=>{
    window.location.reload()
}
  return (
   <div className='app'>
    <div className="container">
      <h2 className='center'>BMI Calculator</h2>
      <form action="" onSubmit={calcBmi}>
        <div>
          <label htmlFor="">Weight(Kg)</label>
          <input  value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Height(ft)</label>
          <input  value={height}  onChange={(event)=>setHeight(event.target.value)}/>
        </div>
        <div>
         <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
        
      </form>
      <div className="center">
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
      <div className="img-container">
        <img src={imgSrc} alt="" />
      </div>
    </div>
      
    </div>
  )
}

export default BmiCalculator
