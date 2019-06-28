import styled from "styled-components";
import { Form, Input } from "@rocketseat/unform";
// import fundo from "images/fundo.jpg";

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  background: black;
  background-image: url(${process.env.PUBLIC_URL + 'assets/images/fundo.jpg'});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Container = styled.div`
  height: 100%;

  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 90%); /* w3c */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .content {
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const LogoImage = styled.img`
  width: 72px;
  margin-bottom: 25px;
`;

export const StyledForm = styled(Form)`
  min-width: 390px;
  span {
    color: #ecf0f1;
  }
  button {
    margin-top: 15px;
  }
`;

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
  margin-top: 5px;
`;
