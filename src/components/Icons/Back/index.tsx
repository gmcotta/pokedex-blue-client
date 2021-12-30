import { IconProps } from '../model';
import theme from '@/styles/theme';

const Back = ({ color = 'black', size = 'medium' }: IconProps) => {
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
        d="M16.0002 6.99996V8.99996H4.00016L9.50016 14.5L8.08016 15.92L0.160156 7.99996L8.08016 0.0799561L9.50016 1.49996L4.00016 6.99996H16.0002Z"
        fill={theme.colors[color]}
      />
    </svg>
  );
};

export default Back;
