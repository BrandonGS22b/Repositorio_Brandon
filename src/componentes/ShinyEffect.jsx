import React from 'react';

// eslint-disable-next-line react/prop-types
const ShinyEffect = ({ left, right, top, size = 500 }) => {
  const positionStyles = {
    top: `${top}`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionStyles.left = `${left}px`;
  }

  if (right !== undefined) {
    positionStyles.right = `${right}px`;
  }

  return (
    <div className='shiny-effect' style={positionStyles}></div>
  );
}

export default ShinyEffect;
