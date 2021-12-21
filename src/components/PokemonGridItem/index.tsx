import { LiHTMLAttributes } from 'react';

import Link from 'next/link';
import formatPokemonName from '../../utils/formatPokemonName';

import { PokemonGridItemProps as ModelProps } from 'models';
import * as S from './styles';

type PokemonGridItemProps = ModelProps & LiHTMLAttributes<HTMLLIElement>;

const PokemonGridItem = ({
  pokemonId,
  name,
  imgSrc,
  pokemonTypes,
  ...props
}: PokemonGridItemProps) => {
  return (
    <S.Wrapper role="button" pokemonTypes={pokemonTypes} {...props}>
      <Link href={`/pokemon/${pokemonId}`} passHref>
        <S.ImageWrapper>
          <img src={imgSrc} alt={formatPokemonName(pokemonId, name)} />
        </S.ImageWrapper>
      </Link>
    </S.Wrapper>
  );
};

export default PokemonGridItem;
