import { Link } from "react-router-dom";
import { useEffect } from "react";
import './ColorDetails.css'

const ColorDetails = ({color}) => {  

  useEffect(() => {
    document.body.style.backgroundColor = color.colorCode; // Set the desired background color here

    return () => {
      document.body.style.backgroundColor = ''; // Clean up by resetting the background color
    };
  }, []);

  return (
    <div className='ColorDetails'>
      <h1>THIS IS {color.name.toUpperCase()}!</h1>
      <h1>ISN'T IT BEAUTIFUL!</h1>
      <Link to="/colors">GO BACK</Link>
    </div>
  )
}

export default ColorDetails;