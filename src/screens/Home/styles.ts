import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  gap: 40px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const UserPicture = styled.Image`
  width: 40px;
  height: 40px;
`

export const MealsContainer = styled.View`
  gap: 20px;
`

export const Text = styled.Text`
  font-size: 18px;
`