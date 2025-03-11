import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Lauren Baker
          </Typography>
          <div>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
            <Button component={Link} to="/projects" color="inherit">Projects</Button>
            <Button component={Link} to="/contact" color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
