import React, { useEffect, useState } from 'react';
import './map.css';
import locationmark from '../assets/parking-sign-2526.png';
import axios from 'axios';
import { GoogleMap, Marker, OverlayView, InfoWindow } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

export const Mappage = ({ isLoadded }) => {
  const [location, setlocation] = useState([]);
  const [loctionid, setlocationid] = useState({
    locid: '',
    title: '',
  });
  const [activeMarker, setActiveMarker] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:4000/parking-locations')
      .then((response) => {
        setlocation(response.data.locationData);
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
        window.alert('Invalid credentials');
      });
  }, []);

  const eventhandlemarker = (value) => {
    setActiveMarker(value);
    setlocationid({ locid: value.id, title: value.title });
  };

  const labelStyle = {
    color: 'black',
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '5px',
    position: 'absolute',
    top: '-30px',
    left: '-30px',
  };


  useEffect(() => {
    if (activeMarker) {
      navigate('/signin/mainpage/time', { state: { object: loctionid } });
    }
  }, [activeMarker, navigate, loctionid]);

  return (
    isLoadded && (
      <div className="map">
        <GoogleMap
          zoom={16}
          center={{
            lat: 18.0527,
            lng: 79.5372,
          }}
          mapContainerClassName="mapStyles"
        >
          {location.map((value, index) => {
            const lat = value.latitude;
            const lng = value.longitude;

            if (!isNaN(lat) && !isNaN(lng)) {
              return (
                <Marker
                  key={index}
                  position={{ lat: lat, lng: lng }}
                  options={{ icon: locationmark }}
                  onClick={() => eventhandlemarker(value)}
                >
                  <OverlayView
                    position={{ lat: lat + 0.001, lng: lng + 0.0007 }}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  >
                    <div style={labelStyle}>{value.title}</div>
                  </OverlayView>
                </Marker>
              );
            } else {
              console.error(`Invalid data for marker at index ${index}`);
              return null;
            }
          })}
        </GoogleMap>
      </div>
    )
  );
};
