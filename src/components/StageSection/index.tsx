import { useRouter } from 'next/router';

import PokemonGridItem from '@/components/PokemonGridItem';
import { PokemonEvolutionStage } from '@/models/PokemonInfo';

import * as S from './styles';

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
            showPokemonName
            onClick={() => handleGridItemClick(pokemon.pokemonId!)}
          />
        ))}
      </S.StageGrid>
    </S.StageContainer>
  );
};

export default StageSection;
