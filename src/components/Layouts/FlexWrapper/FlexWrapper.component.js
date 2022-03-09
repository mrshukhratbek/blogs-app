import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  max-width: 735px;
  margin: 0 auto;
  flex-direction: ${(props) => props.direction || 'initial'};
  justify-content: ${(props) => props.justify || 'initial'};
  align-items: ${(props) => props.align || 'initial'};
  gap: ${(props) => props.gap};
`;

export { FlexWrapper };
