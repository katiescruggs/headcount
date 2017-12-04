import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ComparisonCard.css';

const ComparisonCard = (
  { districtOne, 
    districtTwo, 
    compareDistrictAverages}) => {

  const comparison = compareDistrictAverages(districtOne, districtTwo);

  return (
    <div className="comparison-card">
      <div className="comparison-card-head">
        <h2>AVERAGES</h2> 
      </div>

      <p><strong>{districtOne} AVERAGE:</strong></p>
      <p className="big-number district1-avg">{comparison[districtOne]}</p>

      <p><strong>{districtTwo} AVERAGE:</strong></p>
      <p className="big-number district2-avg">{comparison[districtTwo]}</p>

      <p><strong>COMPARISON RATIO:</strong></p>
      <p className="big-number comparison">{comparison.compared}</p>

    </div>
  );
};

export default ComparisonCard; 

ComparisonCard.propTypes = {
  districtOne: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  districtTwo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleClick: PropTypes.func
};