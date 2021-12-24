import { useEffect, useState } from 'react';

import PokemonGridItem from '@/components/PokemonGridItem';
import Pagination from '@/components/Pagination';
import { usePokemonListQuery } from '@/hooks/usePokemonListQuery';
import formatPokemonName from '@/utils/formatPokemonName';

import * as S from './styles';

const PokemonListTemplate = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { data, loading, fetchMore } = usePokemonListQuery({
    variables: {
      page,
      pageSize: 24,
    },
  });

  useEffect(() => {
    if (data) {
      setLastPage(data?.pokemons!.meta.pagination.pageCount);
    }
  }, [data, page]);

  const handleMouseEnter = (id: number, name: string) => {
    setPokemonName(formatPokemonName(id, name));
  };
  const handleMouseLeave = () => {
    setPokemonName('');
  };
  const handlePrevPage = () => {
    fetchMore({ variables: { page: page - 1, pageSize: 24 } });
    setPage(page - 1);
  };
  const handleNextPage = () => {
    fetchMore({ variables: { page: page + 1, pageSize: 24 } });
    setPage(page + 1);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <button>Filter</button>
          <input defaultValue={pokemonName} />
          <button>Settings</button>
        </div>
      </S.Header>
      <S.Container>
        <S.ListContainer>
          {loading ? (
            <S.Loading>Loading...</S.Loading>
          ) : (
            <>
              <S.Grid>
                {data?.pokemons?.data.map((p) => (
                  <PokemonGridItem
                    key={p.attributes!.pokemonId}
                    pokemonId={p.attributes!.pokemonId}
                    name={p.attributes!.name}
                    imgSrc={`http://localhost:1337${
                      p.attributes!.frontImage.data!.attributes!.url
                    }`}
                    pokemonTypes={p.attributes!.types!.data.map(
                      (t) => t.attributes!.name
                    )}
                    onMouseEnter={() =>
                      handleMouseEnter(
                        p.attributes!.pokemonId,
                        p.attributes!.name
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </S.Grid>
              <Pagination
                actualPage={page}
                lastPage={lastPage}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            </>
          )}
        </S.ListContainer>
        <S.ReactIllustrationContainer>
          <S.ReactIllustrationEllipses>
            <S.ReactIllustrationCore />
          </S.ReactIllustrationEllipses>
        </S.ReactIllustrationContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default PokemonListTemplate;
