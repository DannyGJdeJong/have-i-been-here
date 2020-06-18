import * as React from "react"
import styled from 'styled-components'

type MarkerProps = {
  lat: number,
  lng: number,
  radius: number
}

type StyledMarkerProps = {
  radius: number
}

const StyledMarker = styled.span<StyledMarkerProps>`
  height: ${({radius}) => `${radius}px`};
  width: ${({radius}) => `${radius}px`};
  background-color: #55006955;
  border-radius: 50%;
  border-style: solid;
  border-color: #690069;
  display: inline-block;
  transform: translate(-50%, -50%);
`

const Marker : React.FunctionComponent<MarkerProps> = ({ radius }) => (
  <div>
    <StyledMarker radius={radius}/>
  </div>
)

export default Marker
