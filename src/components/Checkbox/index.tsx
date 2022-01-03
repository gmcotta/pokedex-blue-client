import { HTMLProps } from 'react';

type CheckboxProps = HTMLProps<HTMLInputElement> & {
  label?: string;
};

const Checkbox = ({ id, name, label, ...props }: CheckboxProps) => {
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} name={name} {...props} />
      {label}
    </label>
  );
};

export default Checkbox;
