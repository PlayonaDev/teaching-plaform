import React from 'react';
import { Button } from '../Button';
import logo from '../../assets/logo.png';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from './styles';
import { useNavigate } from 'react-router-dom';

const Header = ({autenticado}) =>  {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate('/register');
  }

  const handleClickSignIn = () => {
    navigate('/login');
  }

  return (
    <Wrapper>
      <Container>
      <Row>
        <img src={logo} alt="Logo da dio" />
        {autenticado ?  (
          <>
          <BuscarInputContainer>
          <Input placeholder='Buscar...'/>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
          </>
        ) : null}
        
      </Row>
      <Row>
        {autenticado ? ( <UserPicture src="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
        ) : (
        <>  
        <MenuRight href="$">Home</MenuRight>
        <Button title="Entrar" onClick={handleClickSignIn}/>
        <Button title="Cadastrar" onClick={handleClickRegister}/>
        </>
      )}
        
      </Row>
      </Container>
    </Wrapper>
  )
}

export  { Header }