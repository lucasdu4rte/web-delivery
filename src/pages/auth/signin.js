import React, { useState } from "react";
import * as Yup from "yup";
import api from "api";

import logo from "images/logo.svg";
import {
  Container,
  LogoImage,
  StyledForm,
  StyledInput,
  Background
} from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Há algo errado aqui, verifique o email digitado.")
    .required("Por favor, digite seu email."),
  password: Yup.string()
    .min(4)
    .required("Por favor, digite sua senha.")
});

const Signin = ({ setUser, setToken, history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(data) {
    setLoading(true);
    setError('')

    try {
      const {data: responseData} = await api.post("/sessions", data)

      console.log('responseData', responseData)

      setTimeout(async () => {
        setLoading(false);
        setUser(responseData.user)
        setToken(responseData.token)
        history.push('/pedidos')
      }, 300);
    } catch (error) {
      console.log('error', error)
      if (error.response) {
        if (error.response.code >= 500) {
          setError('Desculpe, houve um problema com o nosso servidor, estamos resolvendo. Por favor, tente mais tarde.')
          return
        }
        if (error.response.code >= 400) {
          setError('O usuário ou senha está incorreto, verique seus dados.')
          return
        }
      }

      setError('Houve um problema de rede, por favor, verifique sua conexão.')
      setTimeout(async () => {
        setLoading(false);
      }, 300);
    }
  }

  return (
    <>
      <Background />
      <Container>
        <div className="content full-overlay">
          <LogoImage src={logo} alt="Logo Delivery" />

          <StyledForm
            schema={schema}
            onSubmit={handleSubmit}
            className="form-group"
          >
            <StyledInput
              className="form-input input-lg"
              name="email"
              placeholder="Seu email"
            />
            <StyledInput
              className="form-input input-lg"
              name="password"
              type="password"
              placeholder="Sua senha"
            />

            <button
              className={`btn btn-primary btn-block btn-lg text-bold ${
                loading ? "loading" : ""
              }`}
              type="submit"
            >
              Entrar
            </button>
            <span className="text-justify">
              {error}
            </span>
          </StyledForm>
        </div>
      </Container>
    </>
  );
};

export default Signin;
