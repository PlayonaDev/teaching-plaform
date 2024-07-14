import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Column,
         Container,
         Row,
         SignIn, 
         SubtitleRegister, 
         TextPolicy, 
         TextSignIn, 
         Title, 
         TitleRegister, 
         Wrapper } from '../register/styles';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';

const schema = yup.object({
  name: yup.string().min(15, 'No minino caracteres 15').required('Campo Obrigatório'),
  email: yup.string().email('email não é válido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No minino caracteres').required('Campo Obrigatório'),
}).required();

const Register = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async formData => {
  try{
   
  }catch{
    alert('Houve um erro, tente novamente')
  }
}


  return (
    <>
    <Header />
    <Container>
    <Column>
    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
    </Column>
    <Column>
      <Wrapper>
      <TitleRegister>Comece agora grátis</TitleRegister>
      <SubtitleRegister>Crie sua conta e make the change</SubtitleRegister>
      <form onSubmit={onSubmit}>
        <Input name="name" errorMessage={errors?.email?.message}placeholder="Nome completo" control={control} leftIcon={<MdPerson/>} />
        <Input name="email" errorMessage={errors?.email?.message} placeholder="Email" control={control} leftIcon={<MdEmail/>}/>
        <Input name="password" errorMessage={errors?.email?.message} placeholder="Password" control={control} leftIcon={<MdLock/>}/>
        <Button title="Criar Conta" variant='secondary' type="submit"/>
      </form>
      <Row>
        <TextPolicy>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextPolicy>
      </Row>
      <Row>
        <TextSignIn>Já tenho conta.</TextSignIn>
        <SignIn>Fazer login</SignIn>
      </Row>
      </Wrapper>
    </Column>
    </Container>
    </>
  )
}

export { Register };
