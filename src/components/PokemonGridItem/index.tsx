import { useRouter } from 'next/router';

import { PokemonGridItemProps } from './models';
import * as S from './styles';

const PokemonGridItem = ({
  id,
  name,
  imgSrc,
  pokemonTypes,
}: PokemonGridItemProps) => {
  const { push } = useRouter();
  const handleClick = (id: number) => {
    push(`/pokemon/${id}`);
  };

  return (
    <S.Wrapper
      role="button"
      pokemonTypes={pokemonTypes}
      onClick={() => handleClick(id)}
    >
      <img src={imgSrc} alt={`#${id.toString().padStart(3, '0')}-${name}`} />
    </S.Wrapper>
  );
};

export default PokemonGridItem;
