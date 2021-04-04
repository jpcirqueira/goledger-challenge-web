import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 100px;
  grid-row-gap: 40px;
  justify-content: center;
  padding: 20px;
`;
