import React from 'react';

function RedirectToGoogleMaps({ latitude, longitude }) {
    const handleClick = () => {
        const googleMapsUrl = `https://www.google.com/maps/?q=${latitude},${longitude}`;
        window.location.href = googleMapsUrl;
    };

    return (
        <button onClick={handleClick}>
            location
        </button>
    );
}

export default RedirectToGoogleMaps

// Usage
// <RedirectToGoogleMaps latitude={37.7749} longitude={-122.4194} />
