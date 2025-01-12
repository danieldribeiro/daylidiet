import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const StyledButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-size: 16px;
`