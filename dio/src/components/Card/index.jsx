import React from 'react'
import profilePicture from '../../assets/profilevitor.png';
import { CardContainer, 
         Content,
         HasInfo,
         ImageBackground,
         PostInfo,
         UserInfo,
         UserPicture } from './styles';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://img.freepik.com/fotos-gratis/site-de-ia-ajudando-na-producao-de-software_1268-21620.jpg?t=st=1720634502~exp=1720638102~hmac=4ae12369d8b90417c53f7723280d2067e6e04f38e84669c2645e58e503763acc&w=826"/>
      <Content>
        <UserInfo>
          <UserPicture src={profilePicture}/>
          <div>
            <h4>Vitor Augusto</h4>
            <p>Há 10 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de React js e Backend Kotlin</h4>
          <p>Projeto feito com React js and Backend em Kotlin, feito por LearnTechWorld</p>
        </PostInfo>
        <HasInfo>
          <h4>#REACT #KOTLIN #JAVASCRIPT</h4>
          <p><FiThumbsUp /> 2K</p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
