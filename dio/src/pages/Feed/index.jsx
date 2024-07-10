import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from './styles'
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/Userinfo";

const Feed = () => {
  return(
    <>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
      <Title>Feed</Title>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </Column>
      <Column flex={1}>
      <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
      <UserInfo percentual={80} nome="Vitor Augusto" image="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
      <UserInfo percentual={70} nome="Vitor Augusto" image="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
      <UserInfo percentual={60} nome="Vitor Augusto" image="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
      <UserInfo percentual={50} nome="Vitor Augusto" image="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
      <UserInfo percentual={30} nome="Vitor Augusto" image="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
      <UserInfo percentual={20} nome="Vitor Augusto" image="https://avatars.githubusercontent.com/u/73918074?v=4&size=64" />
      </Column>
    </Container>
    </>
  )
}

export { Feed }