import { useRouter } from 'next/router';
import { FormEvent, SyntheticEvent, useEffect, useState } from 'react';

import Checkbox from '@/components/Checkbox';
import { GetAllPokemonTypes_types_data_attributes } from '@/graphql/generated/GetAllPokemonTypes';

import * as S from './styles';
import { useAllPokemonTypes } from '@/hooks/useAllPokemonTypesQuery';

const FilterForm = () => {
  const { push } = useRouter();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [types, setTypes] = useState<
    (GetAllPokemonTypes_types_data_attributes | null)[]
  >([]);
  const { data } = useAllPokemonTypes({});

  useEffect(() => {
    if (data) {
      const types = data.types!.data.map((type) => {
        return type.attributes;
      });
      setTypes(types);
    }
  }, [data]);

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

  const capitalizeType = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <S.Wrapper onSubmit={(event) => handleFilter(event)}>
      <h3>Filter</h3>
      <div>
        <h4>Type</h4>
        <span>Select up to 2 types</span>
        <S.CheckboxGrid>
          {types.map((type) => (
            <Checkbox
              key={type?.name}
              id={type?.name}
              name="pokemon-type"
              label={capitalizeType(type!.name)}
              onChange={(event) => handleTypeSelected(event)}
            />
          ))}
        </S.CheckboxGrid>
      </div>
      <button>Filter</button>
    </S.Wrapper>
  );
};

export default FilterForm;
