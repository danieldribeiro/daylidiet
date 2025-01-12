import { ReactNode } from "react";
import { StyledButton, Title } from "./styles"; 
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon?: ReactNode,
  title: string
}

export default function Button({ icon, title, ...rest }: Props){
  return (
    <StyledButton {...rest}>
      {icon}
      <Title> {title}</Title>
    </StyledButton>
  );
}