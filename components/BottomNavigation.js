import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';

export const navItems = [
  { label: '脚本', href: '/', icon: <WidgetsIcon /> },
  { label: '更新', href: '/updates', icon: <MoveToInboxIcon /> },
  { label: '关于', href: '/about', icon: <InfoIcon /> },
];

/**
 * @param {object} props
 * @param {number} [props.value]
 */
const Navigation = (props) => {
  const { value } = props;

  return (
    <BottomNavigation value={value} showLabels>
      {navItems.map((item) => (
        <BottomNavigationAction
          key={item.href}
          label={item.label}
          icon={item.icon}
          component={Link}
          href={item.href}
        />
      ))}
    </BottomNavigation>
  );
};

export default Navigation;
