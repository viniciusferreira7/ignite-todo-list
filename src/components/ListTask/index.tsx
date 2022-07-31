import { Circle, Trash } from 'phosphor-react'
import { ListItemContainer, ListTaskContainer } from './ListTask.styles'

export function ListTask() {
  return (
    <ListTaskContainer>
      <ol>
        <ListItemContainer>
          <Circle size={24} />
          <p>
            Integer urna interdum massa ListItemContainerbero auctor neque
            turpis turpis semper. Duis vel sed fames integer.
          </p>
          <Trash size={24} />
        </ListItemContainer>
      </ol>
    </ListTaskContainer>
  )
}
