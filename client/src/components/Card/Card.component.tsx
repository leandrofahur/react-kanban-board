import { Avatar } from '../Avatar/Avatar.component'
import { Label } from '../Label/Label.component'
import { CardContainer, CardContent, CardFooter } from './Card.styled'

export function Card() {
  return (
    <CardContainer>
      <CardContent />
      <CardFooter>
        <Avatar size='small' src='http://github.com/leandrofahur.png' />
        <Label variant='blue'>Label</Label>
      </CardFooter>
    </CardContainer>
  )
}