import { HTMLProps } from 'react';
import * as S from './styles';

type CheckboxProps = HTMLProps<HTMLInputElement> & {
  label?: string;
};

const Checkbox = ({ id, name, label, ...props }: CheckboxProps) => {
  return (
    <S.Container htmlFor={id}>
      <input type="checkbox" id={id} name={name} {...props} />
      <span>{label}</span>
    </S.Container>
  );
};

export default Checkbox;
