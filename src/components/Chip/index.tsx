import * as S from './styles';

type ChipProps = {
  name: string;
  hasImage?: boolean;
};

const Chip = ({ name, hasImage = false }: ChipProps) => {
  return (
    <S.Wrapper color={name}>
      {hasImage && <img src={`/images/pokemonTypes/${name}.svg`} alt={name} />}
      <span>{name}</span>
    </S.Wrapper>
  );
};

export default Chip;
