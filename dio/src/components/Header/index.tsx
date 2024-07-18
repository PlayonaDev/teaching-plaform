import React, { useContext } from 'react';
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
import { AuthContext } from '../../pages/context/auth';
import { Link } from 'react-router-dom';

const Header = () =>  {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
      <Row>
        <Link to="/">
        <img src={logo} alt="Logo da dio" />
        </Link>
        {user.id ?  (
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
        {user.id ? ( 
          <>
          <UserPicture src="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
          <a href="/" onClick={handleSignOut}>Sair</a>
          </>
        ) : (
        <>  
        <MenuRight href="$">Home</MenuRight>
        <Button title="Entrar"/>
        <Button title="Cadastrar"/>
        </>
      )}
        
      </Row>
      </Container>
    </Wrapper>
  )
}

export  { Header }