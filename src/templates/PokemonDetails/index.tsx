import { useEffect, useState } from 'react';

import Chip from '@/components/Chip';
import PokemonGridItem from '@/components/PokemonGridItem';
import StatusBar from '@/components/StatusBar';
import { PokemonEvolutionStage, PokemonInfo } from '@/models/PokemonInfo';
import formatPokemonHeight from '@/utils/formatPokemonHeight';
import formatPokemonName from '@/utils/formatPokemonName';
import formatPokemonWeight from '@/utils/formatPokemonWeight';

import * as S from './styles';
import { useRouter } from 'next/router';

type PokemonDetailsTemplateProps = {
  details: PokemonInfo;
};

type EvolutionChain = {
  firstStage: PokemonEvolutionStage[] | undefined;
  secondStage: PokemonEvolutionStage[] | undefined;
  thirdStage: PokemonEvolutionStage[] | undefined;
};

type StageNames = 'firstStage' | 'secondStage' | 'thirdStage';

type TabOptions = 'info' | 'status' | 'evolution';

const FIRST_POKEMON_NUMBER = 1;
const LAST_POKEMON_NUMBER = 898;

type StageSectionProps = {
  title: string;
  stageInfo: PokemonEvolutionStage[] | undefined;
};

const StageSection = ({ title, stageInfo }: StageSectionProps) => {
  const { push } = useRouter();
  const handleGridItemClick = (id: number) => {
    push(`/pokemon/${id}`);
  };
  return (
    <S.StageContainer>
      <h2>{title}</h2>
      <S.StageGrid>
        {stageInfo!.map((pokemon) => (
          <PokemonGridItem
            key={pokemon.pokemonId!}
            imgSrc={pokemon.frontImageUrl!}
            name={pokemon.name!}
            pokemonId={pokemon.pokemonId!}
            pokemonTypes={pokemon.pokemonTypes!}
            onClick={() => handleGridItemClick(pokemon.pokemonId!)}
          />
        ))}
      </S.StageGrid>
    </S.StageContainer>
  );
};

const PokemonDetailsTemplate = ({ details }: PokemonDetailsTemplateProps) => {
  const { push, asPath } = useRouter();

  const [activeTab, setActiveTab] = useState<TabOptions>('info');
  const [currentPokemon, setCurrentPokemon] = useState(0);

  useEffect(() => {
    const [, , pokemon] = asPath.split('/');
    setCurrentPokemon(Number(pokemon));
  }, [asPath]);
  useEffect(() => {
    setActiveTab('info');
  }, [push]);

  const countEvolutionStages = (evolution: EvolutionChain) => {
    let count = 0;
    const stages = Object.keys(evolution);
    for (const stage of stages) {
      if (evolution[stage as StageNames]!.length > 0) count++;
    }
    return count;
  };

  const handlePreviousPokemon = () => {
    push(`/pokemon/${currentPokemon - 1}`);
  };

  const handleNextPokemon = () => {
    push(`/pokemon/${currentPokemon + 1}`);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <button onClick={() => setActiveTab('info')} type="button">
            Info
          </button>
          <button onClick={() => setActiveTab('status')} type="button">
            Status
          </button>
          <button onClick={() => setActiveTab('evolution')} type="button">
            Evolution
          </button>
        </div>
      </S.Header>
      <S.Container>
        <S.PokemonName>
          {formatPokemonName(details.pokemonId!, details.name!)}
        </S.PokemonName>
        {activeTab === 'evolution' && (
          <S.EvolutionGrid
            numberOfStages={countEvolutionStages(details.evolutionChain)}
          >
            {details.evolutionChain.firstStage!.length > 0 && (
              <StageSection
                title="First Stage"
                stageInfo={details.evolutionChain.firstStage}
              />
            )}
            {details.evolutionChain.secondStage!.length > 0 && (
              <StageSection
                title="Second Stage"
                stageInfo={details.evolutionChain.secondStage}
              />
            )}
            {details.evolutionChain.thirdStage!.length > 0 && (
              <StageSection
                title="Third Stage"
                stageInfo={details.evolutionChain.thirdStage}
              />
            )}
          </S.EvolutionGrid>
        )}
        {activeTab !== 'evolution' && (
          <S.InfoGrid>
            <S.ImageCard>
              <img
                src={`${details.officialImageUrl}`}
                alt={`${details.pokemonId} - official image`}
              />
            </S.ImageCard>
            {activeTab === 'info' && (
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
            )}
            {activeTab === 'status' && (
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
            )}
          </S.InfoGrid>
        )}
      </S.Container>
      <S.Footer>
        <div>
          <button
            type="button"
            onClick={() => handlePreviousPokemon()}
            disabled={currentPokemon === FIRST_POKEMON_NUMBER}
          >
            Previous Pokémon
          </button>
          <button
            type="button"
            onClick={() => handleNextPokemon()}
            disabled={currentPokemon === LAST_POKEMON_NUMBER}
          >
            Next Pokémon
          </button>
        </div>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PokemonDetailsTemplate;
