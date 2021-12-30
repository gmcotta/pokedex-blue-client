import { IconProps } from '../model';
import theme from '@/styles/theme';

const Filter = ({ color = 'black', size = 'medium' }: IconProps) => {
  const { width, height } = theme.icons.sizes[size];
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99967 7.99889V15.0024C10.0397 15.269 9.93968 15.5534 9.70972 15.74C9.31978 16.0867 8.68989 16.0867 8.29995 15.74L6.29028 13.9536C6.06032 13.7492 5.96034 13.4737 6.00033 13.2159V7.99889H5.97034L0.211288 1.4398C-0.128656 1.05763 -0.0486694 0.497709 0.38126 0.195528C0.571228 0.0711013 0.781193 0 1.00116 0H14.9988C15.2188 0 15.4288 0.0711013 15.6187 0.195528C16.0487 0.497709 16.1287 1.05763 15.7887 1.4398L10.0297 7.99889H9.99967Z"
        fill={theme.colors[color]}
      />
    </svg>
  );
};

export default Filter;
