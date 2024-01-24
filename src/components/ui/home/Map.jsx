import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const Map = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = { lat: 9.0333176, lng: 38.7613275 };

  const locationDetails = {
    name: "Tewor Import",
    address: "Addis Ababa, Ethiopia",
  };

  const [infoWindow, setInfoWindow] = React.useState(locationDetails);

  const handleInfoWindowClose = () => {
    setInfoWindow(null);
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyATOcQxP2BBBp441afkPdwibZRZYtYeaIo">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker
          position={center}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />

        {infoWindow && (
          <InfoWindow position={center} onCloseClick={handleInfoWindowClose}>
            <div>
              <h3>{infoWindow.name}</h3>
              <p>{infoWindow.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
