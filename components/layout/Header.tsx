import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // For dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // For light mode icon
import Image
 from 'next/image';
interface HeaderProps {
  toggleTheme: () => void; // Add this line
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image
            src="/logo.svg"
            width={250}
            height={100}
            alt='logo'
            ></Image>
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {/* Toggle icon based on theme */}
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
