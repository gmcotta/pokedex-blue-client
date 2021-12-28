import { PokemonTypes } from '@/models';
import * as S from './styles';

type ChipProps = {
  name: string;
  hasImage?: boolean;
};

const Chip = ({ name, hasImage = false }: ChipProps) => {
  return (
    <S.Wrapper aria-label={`${name}-chip`} bgColor={name as PokemonTypes}>
      {hasImage && (
        <img src={`/images/pokemonTypes/${name}.svg`} alt={`${name}-logo`} />
      )}
      <span>{name}</span>
    </S.Wrapper>
  );
};

export default Chip;
