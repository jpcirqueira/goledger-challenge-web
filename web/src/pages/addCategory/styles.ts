import styled from 'styled-components';

export const Container = styled.div`
  padding: 3% 30%;
`;

export const Imput = styled.input`
  width: 100%;
  height: 100%;
  padding: 6px;
  outline: 0;
  border: none;
  border-radius: 4px;
  &:focus {
    /* border-color: #34495e; */
    border: 1px solid #34495e;
  }
`;

export const Form = styled.form`
  background: #dcdcdc;
  margin: auto;
  padding: 15px 15px 40px;
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
`;
export const Button = styled.button`
  background: #4267b2;
  width: 220px;
  height: 45px;
  border-color: #4267b2;
  border-radius: 4px;
  border: none;
`;

export const TextButton = styled.p`
  font-size: 20px;
  color: #ecf0f1;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  margin-top: 2%;
  width: 100%;
`;
