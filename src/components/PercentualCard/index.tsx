import { Container, IconWrapper, Percentage, Text } from "./styles";
import { ArrowUpRight, ArrowDownLeft } from "phosphor-react-native";

type Props = {
  percentage: number;
};

export default function PercentualCard({ percentage }: Props) {
  return (
    <Container percentage={percentage}>
      <IconWrapper>
        {percentage >= 80 ? (
          <ArrowUpRight size={24} color="#639336" weight="bold" />
        ) : (
          <ArrowDownLeft size={24} color="#BF3B44" weight="bold" />
        )}
      </IconWrapper>
      <Percentage>{percentage >0 ? `${percentage}%` : '-'}</Percentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
