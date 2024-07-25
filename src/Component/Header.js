import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { Link } from 'react-router-dom';

export default function Header() {
  const design = {
    backgroundImage: "linear-gradient(to right, #b00404, #21a00a)"
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundImage: design.backgroundImage }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <span style={{ color: 'red' }}>Red</span>
            <span style={{ color: '#0ff90f'}}> & Green</span>
          </Typography>
          <Typography>
            <span style={{ color: '#0ff90f', fontSize: "20px" }}>Wallet</span>
            <span style={{ color: 'red', fontSize: "18px" }}> :: 500</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
              
              <ListItem key="Profile" component={Link} to="/">
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem key="Game" component={Link} to="/game">
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary="Game" />
              </ListItem>
              <ListItem key="Wallet" component={Link} to="/wallet">
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary="Wallet" />
              </ListItem>
              <ListItem key="History" component={Link} to="/wallet">
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary="History" />
                
              </ListItem>
              <ListItem key="Privacy" component={Link} to="/">
                <ListItemIcon><PrivacyTipIcon /></ListItemIcon>
                <ListItemText primary="Privacy" />
              </ListItem>
              <ListItem key="Logout" component={Link} to="/">
                <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
          <Divider />

        </Box>
      </Drawer>
    </Box>
  );
}
