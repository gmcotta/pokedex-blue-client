import { PokemonInfo } from '@/models/PokemonInfo';
import formatPokemonName from '@/utils/formatPokemonName';

import * as S from './styles';

type PokemonDetailsTemplateProps = {
  details: PokemonInfo;
};

const PokemonDetailsTemplate = ({ details }: PokemonDetailsTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <button type="button">Info</button>
        <button type="button">Status</button>
        <button type="button">Evolution</button>
      </S.Header>
      <S.Container>
        <S.PokemonName>
          {formatPokemonName(details.pokemonId!, details.name!)}
        </S.PokemonName>
        <S.InfoGrid>
          <S.ImageCard>
            <img src={`${details.officialImageUrl}`} />
          </S.ImageCard>
          <div>Info card</div>
        </S.InfoGrid>
      </S.Container>
      <S.Header></S.Header>
    </S.Wrapper>
  );
};

export default PokemonDetailsTemplate;
