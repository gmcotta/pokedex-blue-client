import { PokemonStatus } from '@/models';
import * as S from './styles';

type StatusBarProps = {
  name: string;
  status: PokemonStatus;
  value: string;
};

const StatusBar = ({ name, value, status }: StatusBarProps) => {
  function calculateBarWidth(value: string) {
    const result = ((Number(value) / 255) * 100).toFixed(2);
    return result;
  }
  return (
    <S.Wrapper>
      <p>{`${name} - ${value}`}</p>
      <div>
        <S.Bar
          aria-label={status}
          barWidth={calculateBarWidth(value!)}
          bgColor={status}
        />
      </div>
    </S.Wrapper>
  );
};

export default StatusBar;
