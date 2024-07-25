import React from 'react';

const Madurai = () => {
  const targetLocation = { lat: 9.939093, lng: 78.121719 }; // Madurai coordinates

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <button onClick={openGoogleMaps}>Get Madurai Driving Directions</button>
    </div>
  );
};

export default Madurai;
