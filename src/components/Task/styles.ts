import styled from 'styled-components'

interface TaskContainerProps {
  checked: boolean
}

export const TaskContainer = styled.li<TaskContainerProps>`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;

  padding: 1.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme.gray_500};

  div {
    overflow: auto;
  }

  p {
    flex: 1;

    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
    font-size: 0.87rem;
    line-height: 1.19rem;
    color: ${(props) =>
      props.checked ? props.theme.gray_300 : props.theme.gray_100};
  }

  svg {
    cursor: pointer;
  }

  svg:first-child {
    color: ${(props) =>
      props.checked ? props.theme.purple_dark : props.theme.blue};

    &:hover {
      color: ${(props) =>
        props.checked ? props.theme.purple : props.theme.blue_dark};
    }
  }

  svg:last-child {
    color: ${(props) => props.theme.gray_300};
    border: 2px solid transparent;
    border-radius: 1px;

    &:hover {
      color: ${(props) => props.theme.danger};
      background: ${(props) => props.theme.gray_400};
    }
  }
`
