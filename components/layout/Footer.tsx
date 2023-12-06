import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 3 }}>
      <Typography variant="body1">
        © 2023 FOAMLabs
      </Typography>
      {/* Add more footer content here */}
    </Box>
  );
};

export default Footer;
