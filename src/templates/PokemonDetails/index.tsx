import Chip from '@/components/Chip';
import { PokemonInfo } from '@/models/PokemonInfo';
import formatPokemonHeight from '@/utils/formatPokemonHeight';
import formatPokemonName from '@/utils/formatPokemonName';
import formatPokemonWeight from '@/utils/formatPokemonWeight';

import * as S from './styles';

type PokemonDetailsTemplateProps = {
  details: PokemonInfo;
};

const PokemonDetailsTemplate = ({ details }: PokemonDetailsTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <button type="button">Info</button>
          <button type="button">Status</button>
          <button type="button">Evolution</button>
        </div>
      </S.Header>
      <S.Container>
        <S.PokemonName>
          {formatPokemonName(details.pokemonId!, details.name!)}
        </S.PokemonName>
        <S.InfoGrid>
          <S.ImageCard>
            <img src={`${details.officialImageUrl}`} />
          </S.ImageCard>
          <S.InfoCard>
            <h2>{details.genus}</h2>
            <div>
              <div>
                <p>Type</p>
                <div>
                  {details.pokemonTypes?.map((type) => (
                    <Chip key={type} name={type!} hasImage />
                  ))}
                </div>
              </div>
              <div>
                <p>Height</p>
                <p>{formatPokemonHeight(details.height!)}</p>
              </div>
              <div>
                <p>Weight</p>
                <p>{formatPokemonWeight(details.weight!)}</p>
              </div>
            </div>
            <p>{details.description}</p>
          </S.InfoCard>
        </S.InfoGrid>
      </S.Container>
    </S.Wrapper>
  );
};

export default PokemonDetailsTemplate;
