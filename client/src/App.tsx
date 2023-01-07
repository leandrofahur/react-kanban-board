import { Label } from "./components/Label/Label.component"
import styled from "styled-components"

export function App() {
  return (
    <div>
      <Label variant="done">DONE</Label>
      <Label variant="review">REVIEW</Label>
      <Label variant="inProgress">IN PROGRESS</Label>
      <Label variant="toDo">TODO</Label>
    </div>
  )
}
