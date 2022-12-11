import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';

/**
 * @param {object} props
 * @param {number} [props.value]
 */
const Navigation = (props) => {
  const { value } = props;

  return (
    <BottomNavigation value={value} showLabels>
      <BottomNavigationAction
        label='脚本'
        icon={<WidgetsIcon />}
        component={Link}
        href='/'
      />
      <BottomNavigationAction
        label='更新'
        icon={<MoveToInboxIcon />}
        component={Link}
        href='/updates'
      />
      <BottomNavigationAction
        label='关于'
        icon={<InfoIcon />}
        component={Link}
        href='/about'
      />
    </BottomNavigation>
  );
};

export default Navigation;
