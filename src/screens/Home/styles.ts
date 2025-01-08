import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const UserPicture = styled.Image`
  width: 40px;
  height: 40px;
`