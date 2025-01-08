import { Container, Header, Logo, UserPicture } from './styles'
import logo from '@assets/daily-diet-logo.png'
import user from '@assets/user.png' 
import PercentualCard from '@components/PercentualCard'

export default function Home(){
  return (
    <Container>
      <Header>
        <Logo source={logo}/>
        <UserPicture source={user}/>
      </Header>

      <PercentualCard percentage={90.86} />
      
    </Container>
  )
}