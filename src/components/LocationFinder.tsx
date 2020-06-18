import React, { FunctionComponent, useState } from "react"
import { Coords } from "google-map-react";
import LocationPicker from "./LocationPicker";
import FilePicker from "./FilePicker";
import { PointProps } from "./Point";

const LocationFinder : FunctionComponent = () => {
  const [location, setLocation] = useState<Coords | null>(null);
  const [radius, setRadius] = useState<number>(0);
  const [locationData, setLocationData] = useState<JSON | null>(null);
  const [points, setPoints] = useState<Array<PointProps>>(Array());

  const handleRadiusChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(event.target.value))
  }

  const onClick = () => {
    console.log(locationData)
  }

  return (
    <div>
      <div style={ {width: '40%', height: '40%'} }>
          <LocationPicker
            location={ location }
            radius={ radius }
            onLocationChange={ setLocation }
            points={ points }
          />
      </div>
      <input type="number" min="0" step="500" onChange={ handleRadiusChange }></input>
      <FilePicker
        onDataLoad={ setLocationData }
      />
      <button onClick={ onClick }>Click me!</button>
    </div>
  );
}

export default LocationFinder
