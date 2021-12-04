import { useRouter } from 'next/router';
import { LiHTMLAttributes } from 'react';

import { PokemonGridItemProps as ModelProps } from './models';
import * as S from './styles';

// | ButtonHTMLAttributes<HTMLButtonElement>

type PokemonGridItemProps = ModelProps & LiHTMLAttributes<HTMLLIElement>;

const PokemonGridItem = ({
  pokemonId,
  name,
  imgSrc,
  pokemonTypes,
  ...props
}: PokemonGridItemProps) => {
  const { push } = useRouter();
  const handleClick = (id: number) => {
    push(`/pokemon/${id}`);
  };

  return (
    <S.Wrapper
      role="button"
      pokemonTypes={pokemonTypes}
      onClick={() => handleClick(pokemonId)}
      {...props}
    >
      <img
        src={imgSrc}
        alt={`#${pokemonId.toString().padStart(3, '0')} - ${name}`}
      />
    </S.Wrapper>
  );
};

export default PokemonGridItem;
