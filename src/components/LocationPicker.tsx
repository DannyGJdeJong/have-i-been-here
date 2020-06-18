import React, { FunctionComponent, useState } from "react"
import { meters2ScreenPixels } from 'google-map-react/utils';
import GoogleMapReact, { ClickEventValue, ChangeEventValue, Coords } from "google-map-react";
import Marker from "./Marker"
import Point, { PointProps } from "./Point"

type LocationPickerProps = {
  location : Coords,
  radius : number,
  onLocationChange : (location: Coords) => void,
  points : Array<PointProps>
}

const getPixelRadius = (location : Coords, radius : number, zoom : number) => {
  if (location) {
    return meters2ScreenPixels(radius, location, zoom).w
  }

  return 0
}

const LocationPicker : FunctionComponent<LocationPickerProps> = ({ location, radius, onLocationChange, points }) => {
  const [zoom, setZoom] = useState<number>(11)

  const handleChange = (changeEvent: ChangeEventValue) => {
    setZoom(changeEvent.zoom);

  }

  const handleClick = ({ lat, lng } : ClickEventValue) => {
    onLocationChange({ lat, lng })
  }

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg" }}
        defaultCenter={ {
            lat: 52.14,
            lng: 4.49
          } }
        defaultZoom={ zoom }
        onClick={ handleClick }
        onChange={ handleChange }
        onZoomAnimationStart={ handleChange }
      >
        {location &&
          <Marker { ... location } radius={ getPixelRadius(location, radius, zoom) }/>
        }
        {
          points.forEach(point => {
            return (
              <Point {... point }/>
            )
          })
        }
      </GoogleMapReact>
    </div>
  );
}

export default LocationPicker
