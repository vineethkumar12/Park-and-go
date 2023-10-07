import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const Mappage = ({google,onMarkerClick}) => {
  return (
    <div ><Map google={google} zoom={14}>
 
    <Marker onClick={onMarkerClick}
            name={'Current location'} />
      </Map>      
</div>
  )
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBWZdmYmwkob7dK9r5-NuodRdn4M-hldGI')
  })(Mappage)
