import React from 'react';

const Trichy = () => {
  const targetLocation = { lat: 10.7905, lng: 78.7047 }; // Trichy coordinates

  const openGoogleMaps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${targetLocation.lat},${targetLocation.lng}&travelmode=driving`;
        window.open(url, '_blank');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh',backgroundColor:'green',color:'white' }}>
      <button onClick={openGoogleMaps}>Get Trichy Driving Directions</button>
    </div>
  );
};

export default Trichy;
