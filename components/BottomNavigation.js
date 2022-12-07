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
        label='Scripts'
        icon={<WidgetsIcon />}
        component={Link}
        href='/'
      />
      <BottomNavigationAction
        label='Updates'
        icon={<MoveToInboxIcon />}
        component={Link}
        href='/updates'
      />
      <BottomNavigationAction
        label='About'
        icon={<InfoIcon />}
        component={Link}
        href='/about'
      />
    </BottomNavigation>
  );
};

export default Navigation;
