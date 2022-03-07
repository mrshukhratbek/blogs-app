import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: ${(props) => props.justify || 'initial'};
  align-items: ${(props) => props.align || 'initial'};
  background-color: #f1f0ee;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;
