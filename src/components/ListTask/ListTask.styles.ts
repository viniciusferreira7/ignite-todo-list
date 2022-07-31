import styled from 'styled-components'

export const ListTaskContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: auto;
  justify-content: center;

  width: 46rem;
  margin: 0 auto;
  margin-top: calc(3.69rem / 2);

  ol {
    padding: 1.5rem 0;
  }
`

export const ListItemContainer = styled.li`
  display: flex;
  gap: 0.75rem;

  padding: 1.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme.gray_500};

  p {
    flex: 1;

    font-size: 0.87rem;
    line-height: 1.19rem;
    color: ${(props) => props.theme.gray_100};
  }

  svg {
    cursor: pointer;
  }

  svg:first-child {
    color: ${(props) => props.theme.blue};

    &:hover {
      color: ${(props) => props.theme.blue_dark};
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
