import { Card } from "./components/Card/Card.component"
import { Column } from "./components/Column/Column.component"

import todoIcon from './assets/todo.svg'
import inProgressIcon from './assets/in-progress.svg'
import reviewIcon from './assets/review.svg'
import doneIcon from './assets/done.svg'

const columns = [
  {
    id: 1,
    iconPath: todoIcon,
    title: "To Do",
    color: 'blue'
  },
  {
    id: 2,
    iconPath: inProgressIcon,
    title: "In Progress"
  },
  {
    id: 3,
    iconPath: reviewIcon,
    title: "Review"
  },
  {
    id: 4,
    iconPath: doneIcon,
    title: "Done"
  }
]

const cards = [{
  id: 1,
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
}]

export function App() {
  return (
    <div>
      {
        columns.map(column => {
          const { id, iconPath, title, color } = column
          return (
            <Column key={id} title={title} iconPath={iconPath} >
              <Card />
              <Card />
              <Card />
            </Column>
          )
        })

      }
    </div>
  )
}
