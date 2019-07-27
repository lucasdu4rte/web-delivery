import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from 'store/modules/auth/actions';
import {
  Container,
  LogoImage,
  StyledForm,
  StyledInput,
  Background,
} from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Há algo errado aqui, verifique o email digitado.')
    .required('Por favor, digite seu email.'),
  password: Yup.string()
    .min(4)
    .required('Por favor, digite sua senha.'),
});

const Signin = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Background />
      <Container>
        <div className="content full-overlay">
          <LogoImage
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt="Logo Delivery"
          />

          <StyledForm
            schema={schema}
            onSubmit={handleSubmit}
            className="form-group"
          >
            <StyledInput
              className="form-input input-lg"
              name="email"
              placeholder="Email"
            />
            <StyledInput
              className="form-input input-lg"
              name="password"
              type="password"
              placeholder="Senha"
            />

            <button
              className={`btn btn-primary btn-block btn-lg text-bold ${
                loading ? 'loading' : ''
              }`}
              type="submit"
            >
              Entrar
            </button>
          </StyledForm>
        </div>
      </Container>
    </>
  );
};

export default Signin;
