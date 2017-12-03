import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';
import Check from 'react-icons/lib/fa/check';


const checkIcon = (num) => {
  return num >= 0.5 ? <Check /> : null;
};

const displayData = (districtData) => {
  const years = Object.keys(districtData);

  return years.map((year, index) => {
    return (
      <li key={index}> 
        <span className="icon-span">
          {checkIcon(districtData[year])} 
        </span> 
        <strong>{year}</strong>
        : {districtData[year]}
      </li>
    );
  });
};

const Card = ({districtName, districtData, handleClick, type, buttonText}) => {
  if (districtData !== undefined) {
    return (
      <div className={`card ${type} ${districtName}`}>
        <div className="card-head">
          <h2>{districtName}</h2>
        </div>
        <div className="card-body">
          <ul className="card-data">
            {displayData(districtData)}
          </ul>
          <div className="button">
            <button 
              className="compare-button" 
              onClick={ () => handleClick(districtName)}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Card;

Card.propTypes = {
  districtName: PropTypes.string,
  districtData: PropTypes.object
};