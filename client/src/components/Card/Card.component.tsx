import { Avatar } from "../Avatar/Avatar.component"
import { Label } from "../Label/Label.component"
import { CardContainer, CardTextArea, CardFooter } from "./Card.styled"

export function Card() {
  return (
    <CardContainer>
      <CardTextArea />
      <CardFooter>
        <Avatar src="https://github.com/leandrofahur.png" size="small" />
        <Label>
          Label
        </Label>
      </CardFooter>
    </CardContainer>
  )
} 