import { Theme } from "../../../theme";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 10px;
`;

export const StyledRegistrationLoginModal = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 15px;

  margin: 0 5px;
  width: 50%;
  min-width: 270px;
  max-width: 600px;

  box-shadow: 0px 5px 5px grey;
`;

export const label = styled.label`
  align-self: flex-start;
`;

export const loginModal = styled.div`
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-beetwen;
`;

/*

button {
  border: none;
  width: 50%;
  align-self: center;
  margin-top: 10px;
}

button {
  background-color: tomato;
  color: white;
  border-radius: 15px;
  height: 30px;
  margin-bottom: 10px;
}
*/
