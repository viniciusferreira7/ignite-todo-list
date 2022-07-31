import { Circle, Trash } from 'phosphor-react'
import {
  HeaderContainer,
  ListItemContainer,
  ListTaskContainer,
} from './ListTask.styles'

export function ListTask() {
  return (
    <ListTaskContainer>
      <HeaderContainer>
        <h5>
          Tarefas criadas <span>5</span>
        </h5>
        <h5>
          Concluídas <span>2 de 5</span>
        </h5>
      </HeaderContainer>
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
