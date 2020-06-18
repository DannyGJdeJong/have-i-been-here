import * as React from "react"
import { ChangeEvent } from "react"
import { readLargeFile } from "../utils"
type FilePickerProps = {
  onDataLoad : (fileData: JSON) => void
}

const FilePicker : React.FunctionComponent<FilePickerProps> = ({ onDataLoad }) => {
  const handleFileChange = (event : ChangeEvent<HTMLInputElement>) => {
    readLargeFile(event.target.files[0], (res: string) => {
      console.log(res)
    })
  }

  return (
    <div>
      <input type="file" accept=".json" onChange={ handleFileChange }></input>
    </div>
  )
}

export default FilePicker
