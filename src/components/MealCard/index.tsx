import { Container, Hour, Name } from "./styles";

type Props = {
  hour: string;
  name: string;
  children: React.ReactNode;
};

export default function MealCard({ hour, name, children }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Name numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Name>
      {children}
    </Container>
  );
}

