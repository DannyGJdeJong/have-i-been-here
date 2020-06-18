import * as React from "react"
import styled from 'styled-components'

export type PointProps = {
  lat: number,
  lng: number,
  date: Date
}

const StyledPoint = styled.span`
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  transform: translate(-50%, -50%);
`

const Point : React.FunctionComponent<PointProps> = () => (
  <div>
    <StyledPoint />
  </div>
)

export default Point
