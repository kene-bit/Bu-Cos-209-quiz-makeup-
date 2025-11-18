import React from 'react';
import './child.css';
import image from './download.jpg';
const Child = () => {

    const name = "kene";
    let age = "18";
    let matric = "24/0307";
  
    let department = "Software engineering";
    const fruits = ["pear", "pineapple", "cherry"];

  return (
  <div>
    <h2>My name is {name} </h2>  
    <p>Department is {department}</p>
    <p>Matric number is {matric}</p>
    <p>I am {age} years old</p>
    {age >=18 ? <p>Adukt </p> : <p>Child</p>}
    {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
    ))}
    <img src={image} alt="Logo" />
  </div>
  );

};
export default Child;