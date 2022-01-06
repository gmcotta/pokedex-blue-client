import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import PokemonGridItem from '@/components/PokemonGridItem';
import Pagination from '@/components/Pagination';
import { usePokemonListQuery } from '@/hooks/usePokemonListQuery';
import { PokemonTypes } from '@/models';
import formatPokemonName from '@/utils/formatPokemonName';

import * as S from './styles';
import { FilterIcon, SettingsIcon, CloseIcon } from '@/components/Icons';
import { formatQueryObjectToGraphQLParams } from '@/utils/formatQueryObjectToGraphQLParams';
import SearchForm from '@/components/forms/SearchForm';
import FilterForm from '@/components/forms/FilterForm';

const PokemonListTemplate = () => {
  const { push, query } = useRouter();
  const [pokemonName, setPokemonName] = useState('');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [pokemonTotal, setPokemonTotal] = useState(0);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const { data, loading, fetchMore } = usePokemonListQuery({
    variables: {
      page,
      pageSize: 24,
      filters: formatQueryObjectToGraphQLParams(query),
    },
  });

  useEffect(() => {
    setIsFilterModalOpen(false);
    setPage(1);
  }, [push, query]);

  useEffect(() => {
    if (data) {
      setLastPage(data?.pokemons!.meta.pagination.pageCount);
      setPokemonTotal(data?.pokemons!.meta.pagination.total);
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
  const handleGridItemClick = (id: number) => {
    push(`/pokemon/${id}`);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <button
            aria-label="filter modal button"
            type="button"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <FilterIcon size="small" />
          </button>
          <span role="textbox" aria-label="pokemon name">
            {pokemonName}
          </span>
          <button aria-label="settings modal button" type="button">
            <SettingsIcon size="small" />
          </button>
        </div>
      </S.Header>
      <S.Container>
        {
          <S.FilterModal
            onClose={() => setIsFilterModalOpen(false)}
            isOpen={isFilterModalOpen}
          >
            <S.ModalContainer data-modal-safe-area="true">
              <S.ModalHeader>
                <button onClick={() => setIsFilterModalOpen(false)}>
                  <CloseIcon size="small" />
                </button>
              </S.ModalHeader>
              <S.ModalContent>
                <SearchForm />
                <FilterForm />
              </S.ModalContent>
            </S.ModalContainer>
          </S.FilterModal>
        }
        <S.ListContainer>
          <S.ListHeader>
            <Pagination
              actualPage={page}
              lastPage={lastPage}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
            />
            <span>{pokemonTotal} Pokémon found</span>
          </S.ListHeader>
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
                    pokemonTypes={
                      p.attributes!.types!.data.map(
                        (t) => t.attributes!.name
                      ) as [PokemonTypes, PokemonTypes?]
                    }
                    onMouseEnter={() =>
                      handleMouseEnter(
                        p.attributes!.pokemonId,
                        p.attributes!.name
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleGridItemClick(p.attributes!.pokemonId)}
                  />
                ))}
              </S.Grid>
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
