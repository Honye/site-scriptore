import { Box, Paper } from '@mui/material';
import BottomNavigation from '../components/BottomNavigation';

const About = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={2} />
      </Paper>
    </Box>
  );
};

export default About;
