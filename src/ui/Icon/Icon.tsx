import { icons } from './icons';
import { IconName } from './icons';

type IconProps = {
  name: IconName;
  color?: string;
  className?: string;
};

export default function Icon({ name, color = 'currentColor', className }: IconProps) {
  const Svg = icons[name];
  return <Svg className={className} style={{ color, fill: 'currentColor' }} />;
}
