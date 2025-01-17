import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import  bannerImage  from '../../assets/banner.png';
import { Header } from "../../components/Header";
import { Container, Title, TextContent, TitleHighlight } from './styles'

const Home = () => {
 const navigate = useNavigate();

 const handleClickSignIn = () => {
  navigate('/login')
 }

  return(
    <>
    <Header />
    <Container>
      <div>
        <Title>
          <TitleHighlight>
            Implemente <br/>
          </TitleHighlight>
           o seu futuro global agora!
        </Title>
        <TextContent>
          Domina as tecnologias utilizadas pelas empresas mais invadoras do mundo
          e encare seu novo desafio profissional, evoluindo em comunidade com os
          melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
      </div>
      <div>
        <img src={bannerImage} alt="Imagem principal" />
      </div>
    </Container>
    </>
  )
}

export { Home }