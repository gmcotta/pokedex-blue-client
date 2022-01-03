import { LiHTMLAttributes } from 'react';

import formatPokemonName from '../../utils/formatPokemonName';

import { PokemonGridItemProps as ModelProps } from 'models';
import * as S from './styles';

type OptionalProps = {
  showPokemonName?: boolean;
};

type PokemonGridItemProps = ModelProps &
  OptionalProps &
  LiHTMLAttributes<HTMLLIElement>;

const PokemonGridItem = ({
  pokemonId,
  name,
  imgSrc,
  pokemonTypes,
  showPokemonName = false,
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
      {showPokemonName && <span>{formatPokemonName(pokemonId, name)}</span>}
    </S.Wrapper>
  );
};

export default PokemonGridItem;
