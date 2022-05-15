import { Menu } from '@styled-icons/feather';
import { Icon } from '../Icon';

type IconMenuProps = {
  size: number;
  color?: string;
};

const IconMenu = ({ size, color }: IconMenuProps) => {
  return (
    <Icon size={size} color={color} aria-label={'Settings image'}>
      <Menu />
    </Icon>
  );
};

export default IconMenu;
