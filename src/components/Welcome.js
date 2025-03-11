import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import profileImage from '../images/profile.jpg';

const Welcome = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={profileImage}
              alt="Lauren Baker"
              sx={{
                height: 400,
                width: '100%',
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>
          
          {/* Text Section */}
          <Grid item xs={12} md={7}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                component="h1"
                variant="h2"
                color="text.primary"
                gutterBottom
              >
                Lauren Baker
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Software Engineer
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                I create beautiful, responsive websites with modern technologies.
                Passionate about user experience and clean code.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" size="large">
                  View Projects
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Welcome;
