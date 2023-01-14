import { Avatar } from '../Avatar/Avatar.component'
import { Label } from '../Label/Label.component'
import { CardContainer, CardContent, CardFooter } from './Card.styled'

interface CardProps {
  id: string,
  content?: string,

}

export function Card() {
  return (
    <CardContainer draggable>
      <CardContent />
      <CardFooter>
        <Avatar size='small' src='http://github.com/leandrofahur.png' />
        <Label variant='blue'>Label</Label>
      </CardFooter>
    </CardContainer>
  )
}