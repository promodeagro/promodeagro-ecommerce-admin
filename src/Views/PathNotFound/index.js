import React from 'react';

const PathNotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height: '100vh', marginTop: '12rem' }}>
      <p style={{ fontSize: '38px', fontWeight: 'bold' }}>404 - Page Not Found</p>
      <p style={{ fontSize: '18px' }}>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default PathNotFound;
