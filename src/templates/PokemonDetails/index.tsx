// import Chip from '@/components/Chip';
import PokemonGridItem from '@/components/PokemonGridItem';
// import StatusBar from '@/components/StatusBar';
import { PokemonEvolutionStage, PokemonInfo } from '@/models/PokemonInfo';
// import formatPokemonHeight from '@/utils/formatPokemonHeight';
import formatPokemonName from '@/utils/formatPokemonName';
// import formatPokemonWeight from '@/utils/formatPokemonWeight';

import * as S from './styles';

type PokemonDetailsTemplateProps = {
  details: PokemonInfo;
};

type EvolutionChain = {
  firstStage: PokemonEvolutionStage[] | undefined;
  secondStage: PokemonEvolutionStage[] | undefined;
  thirdStage: PokemonEvolutionStage[] | undefined;
};

type StageNames = 'firstStage' | 'secondStage' | 'thirdStage';

const PokemonDetailsTemplate = ({ details }: PokemonDetailsTemplateProps) => {
  function countEvolutionStages(evolution: EvolutionChain) {
    let count = 0;
    const stages = Object.keys(evolution);
    for (const stage of stages) {
      if (evolution[stage as StageNames]!.length > 0) count++;
    }
    return count;
  }

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
        <S.EvolutionGrid
          numberOfStages={countEvolutionStages(details.evolutionChain)}
        >
          {details.evolutionChain.firstStage!.length > 0 && (
            <S.StageContainer>
              <h2>First Stage</h2>
              <S.StageGrid>
                {details.evolutionChain.firstStage!.map((pokemon) => (
                  <PokemonGridItem
                    key={pokemon.pokemonId!}
                    imgSrc={pokemon.frontImageUrl!}
                    name={pokemon.name!}
                    pokemonId={pokemon.pokemonId!}
                    pokemonTypes={pokemon.pokemonTypes!}
                  />
                ))}
              </S.StageGrid>
            </S.StageContainer>
          )}
          {details.evolutionChain.secondStage!.length > 0 && (
            <S.StageContainer>
              <h2>Second Stage</h2>
              <S.StageGrid>
                {details.evolutionChain.secondStage!.map((pokemon) => (
                  <PokemonGridItem
                    key={pokemon.pokemonId!}
                    imgSrc={pokemon.frontImageUrl!}
                    name={pokemon.name!}
                    pokemonId={pokemon.pokemonId!}
                    pokemonTypes={pokemon.pokemonTypes!}
                  />
                ))}
              </S.StageGrid>
            </S.StageContainer>
          )}
          {details.evolutionChain.thirdStage!.length > 0 && (
            <S.StageContainer>
              <h2>Third Stage</h2>
              <S.StageGrid>
                {details.evolutionChain.thirdStage!.map((pokemon) => (
                  <PokemonGridItem
                    key={pokemon.pokemonId!}
                    imgSrc={pokemon.frontImageUrl!}
                    name={pokemon.name!}
                    pokemonId={pokemon.pokemonId!}
                    pokemonTypes={pokemon.pokemonTypes!}
                  />
                ))}
              </S.StageGrid>
            </S.StageContainer>
          )}
        </S.EvolutionGrid>
        {/* <S.InfoGrid>
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
          <S.StatusCard>
            <StatusBar status="hp" name="HP" value={details.status!.hp!} />
            <StatusBar
              status="attack"
              name="Attack"
              value={details.status!.attack!}
            />
            <StatusBar
              status="defense"
              name="Defense"
              value={details.status!.defense!}
            />
            <StatusBar
              status="speed"
              name="Speed"
              value={details.status!.speed!}
            />
            <StatusBar
              status="specialAttack"
              name="Special Attack"
              value={details.status!.specialAttack!}
            />
            <StatusBar
              status="specialDefense"
              name="Special Defense"
              value={details.status!.specialDefense!}
            />
          </S.StatusCard>
        </S.InfoGrid> */}
      </S.Container>
    </S.Wrapper>
  );
};

export default PokemonDetailsTemplate;
