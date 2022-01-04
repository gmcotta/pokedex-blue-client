import { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import PokemonGridItem from '@/components/PokemonGridItem';
import Pagination from '@/components/Pagination';
import { usePokemonListQuery } from '@/hooks/usePokemonListQuery';
import { PokemonTypes, PokemonTypesArray } from '@/models';
import formatPokemonName from '@/utils/formatPokemonName';

import * as S from './styles';
import { FilterIcon, SettingsIcon } from '@/components/Icons';
import PokemonSearchNameInput from '@/components/PokemonSearchNameInput';
import Checkbox from '@/components/Checkbox';
import { formatQueryObjectToGraphQLParams } from '@/utils/formatQueryObjectToGraphQLParams';

const PokemonListTemplate = () => {
  const { push, query } = useRouter();
  const [pokemonName, setPokemonName] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
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
    const selectedCheckboxes = getSelectedCheckboxes();
    for (const checkbox of selectedCheckboxes) {
      checkbox.checked = false;
    }
    setIsFilterModalOpen(false);
    setSelectedTypes([]);
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
  const handleSearchInputChange = (
    event: SyntheticEvent<HTMLInputElement, Event>
  ) => {
    setSelectedPokemon((event.target as HTMLInputElement).value);
  };
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedPokemon) {
      const selectedOption = document.querySelector(
        `option[value=${selectedPokemon}]`
      );
      const pokemonId = selectedOption?.getAttribute('data-pokemon-id');
      push(`/pokemon/${pokemonId}`);
    }
  };
  const getSelectedCheckboxes = () => {
    const allCheckboxes = document.querySelectorAll(
      'input[name="pokemon-type"]'
    );
    const allCheckboxesArray = Array.from(allCheckboxes) as HTMLInputElement[];
    const selectedCheckboxes = allCheckboxesArray.filter(
      (checkbox) => checkbox.checked
    );
    return selectedCheckboxes;
  };
  const handleTypeSelected = (
    event: SyntheticEvent<HTMLInputElement, Event>
  ) => {
    const limit = 2;
    let selectedCheckboxes = getSelectedCheckboxes();
    if (selectedCheckboxes.length > limit) {
      (event.target as HTMLInputElement).checked = false;
    }
    selectedCheckboxes = getSelectedCheckboxes();
    const selectedTypes = selectedCheckboxes.map((checkbox) => checkbox.id);
    setSelectedTypes(selectedTypes);
  };
  const handleFilter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let queryString = '';
    if (selectedTypes.length) {
      queryString += `?types=${selectedTypes}`;
    }
    push(queryString);
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
                  Close
                </button>
              </S.ModalHeader>
              <S.ModalContent>
                <S.SearchSection onSubmit={(event) => handleSearch(event)}>
                  <h3>Search</h3>
                  <PokemonSearchNameInput
                    onSelect={(event) => handleSearchInputChange(event)}
                  />
                  <button type="submit">Search</button>
                </S.SearchSection>
                <S.FilterSection onSubmit={(event) => handleFilter(event)}>
                  <h3>Filter</h3>
                  <div>
                    <h4>Type</h4>
                    <span>Select up to 2 types</span>
                    <S.CheckboxGrid>
                      {PokemonTypesArray.map((type) => (
                        <Checkbox
                          key={type}
                          id={type}
                          name="pokemon-type"
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                          onChange={(event) => handleTypeSelected(event)}
                        />
                      ))}
                    </S.CheckboxGrid>
                  </div>
                  <button>Filter</button>
                </S.FilterSection>
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
