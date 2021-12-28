import { LiHTMLAttributes } from 'react';

import formatPokemonName from '../../utils/formatPokemonName';

import { PokemonGridItemProps as ModelProps } from 'models';
import * as S from './styles';

type PokemonGridItemProps = ModelProps & LiHTMLAttributes<HTMLLIElement>;

const PokemonGridItem = ({
  pokemonId,
  name,
  imgSrc,
  pokemonTypes,
  onClick,
  ...props
}: PokemonGridItemProps) => {
  return (
    <S.Wrapper
      role="button"
      pokemonTypes={pokemonTypes}
      onClick={onClick}
      {...props}
    >
      <img src={imgSrc} alt={formatPokemonName(pokemonId, name)} />
    </S.Wrapper>
  );
};

export default PokemonGridItem;
