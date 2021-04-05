import styled from 'styled-components';

export const Actions = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  svg + svg {
    margin-left: 7px;
  }
  svg {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const Card = styled.div`
  background: #dcdcdc;
  padding: 15px 15px 40px;
  position: relative;
  h2 {
    &:first-child {
      max-width: 200px;
    }
  }
`;
