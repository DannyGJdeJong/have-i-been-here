import { Coords } from "google-map-react";


const isWithinRange = (point: Coords, location: Coords, radius: number) => {

}

const getPointsWithinRange = (points: Array<Coords>, location: Coords, radius: number) => {
  return {

  }
}

export const readLargeFile = (file: File, callback: Function) => {
  let sizeLeft  = file.size
  let chunkSize = 64 * 1024;
  let offset    = 0;
  let result    = "";
  let reader = new FileReader();

  const onLoadFunc = () => {
    result += reader.result
    offset = offset + chunkSize

    if (sizeLeft > 0) {
      let slice = file.slice(offset, offset + chunkSize)
      sizeLeft -= slice.size
      console.log(sizeLeft)
      reader.readAsText(slice)
    } else {
      callback(result)
    }

  }

  reader.onload = onLoadFunc

  let slice = file.slice(offset, offset + chunkSize)
  sizeLeft -= slice.size
  reader.readAsText(slice)
}


export const coordsE7ToCoords = (lat: number, lng: number) => {
  return {
    lat: ( lat > 900000000 ) ? lat - 4294967296 : lat,
    lng: ( lng > 900000000 ) ? lng - 4294967296 : lng
  }
}
