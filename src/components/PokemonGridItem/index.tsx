import { PokemonGridItemProps } from './models';
import * as S from './styles';

const PokemonGridItem = ({
  id,
  name,
  imgSrc,
  pokemonTypes,
}: PokemonGridItemProps) => {
  return (
    <S.Wrapper pokemonTypes={pokemonTypes}>
      <img src={imgSrc} alt={`#${id.toString().padStart(3, '0')}-${name}`} />
    </S.Wrapper>
  );
};

export default PokemonGridItem;
