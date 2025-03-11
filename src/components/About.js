import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import sewingBags from '../images/about/sewing_bags.jpg';
import sewingProjects from '../images/about/sewing_projects.jpg';
import charBags from '../images/about/char_bags.jpg';
import readingImage from '../images/about/reading.jpg';
import meAndBlue from '../images/about/me_and_blue.jpeg';

// Import placeholder images - replace these with your actual images later
const sections = [
  {
    title: 'Sewing',
    content: `
      My grandma taught me to sew when I was 6 years old, and it has been a passion 
      of mine ever since. I love making up my own patterns for clothes, or making 
      personalized gifts for friends. During the pandemic, I sewed and sold masks to 
      neighbors and friends, and it was a great way to stay busy and help the environment 
      by reducing the number of single-use masks being used. I have also taught myself to 
      embroider and knit, but sewing remains as my favorite creative outlet.
    `,
    // image: sewingImage
  },
  {
    title: 'Reading',
    content: `
      I have been an avid reader for as long as I can remember, and it has always been 
      a great way for me to relax and escape the stress of daily life. I love reading 
      both fiction and non-fiction, and I was excited to meet my goal of reading 50 
      books in 2024! I have the same goal for 2025 and am on track so far, thanks to 
      my Kindle that makes it easy to read anywhere and everywhere. I have recently 
      been especially loving historical fiction books, and my favorite book that I 
      read last year was The Women by Kristin Hannah.
    `,
    // image: readingImage
  },
  {
    title: 'Family and Friends',
    content: 'Add your content about family here...',
    // image: familyImage
  },
  {
    title: 'Music',
    content: 'Add your content about friends here...',
    // image: friendsImage
  }
];

const About = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          About Me
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 6 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="body1" paragraph>
              Hi, I'm Lauren Baker! I am a Software Engineer based in San Francisco, CA.
              I love getting to be creative both in and outside of work, and am passionate about
              learning new things to expand my knowledge and skillset.
            </Typography>
            
            <Typography variant="body1" paragraph>
              This page is to showcase my hobbies and interests outside of coding.
              I love to sew, read, play board games with friends, spend time with my sisters 
              and mom, and enjoy the outdoors (when it isn't windy in SF). I LOVE dogs (and all 
              animals!), and am excited for the day when I have the time and space to get my 
              own! But for now, I get my dog fix in by spending lots of time with my mom and 
              her new puppy Blue.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={meAndBlue}
              alt="Lauren and Blue"
              sx={{
                width: 300,
                height: 400,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          {sections.map((section) => (
            <Grid item xs={12} key={section.title}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4,
                  backgroundColor: 'rgba(0,0,0,0.02)',
                  borderRadius: 4
                }}
              >
                <Grid container spacing={4} alignItems="center" justifyContent="space-between">
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                      {section.title}
                    </Typography>
                    <Typography variant="body1">
                      {section.content}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {section.title === 'Sewing' ? (
                      <Grid container spacing={2}>
                        {[
                          { src: sewingBags, alt: 'Handmade Bags' },
                          { src: sewingProjects, alt: 'Various Sewing Projects' },
                          { src: charBags, alt: 'Charlotte Bags' }
                        ].map((img, index) => (
                          <Grid item xs={12} sm={4} key={index}>
                            <Box
                              component="img"
                              src={img.src}
                              alt={img.alt}
                              sx={{
                                width: '100%',
                                height: 300,
                                objectFit: 'cover',
                                borderRadius: 2,
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                  transform: 'scale(1.05)'
                                }
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    ) : section.title === 'Reading' ? (
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                          component="img"
                          src={readingImage}
                          alt="Reading"
                          sx={{
                            width: 300,
                            height: 300,
                            objectFit: 'cover',
                            borderRadius: 2,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.02)'
                            }
                          }}
                        />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          width: '100%',
                          height: 300,
                          backgroundColor: '#f0f0f0',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography color="text.secondary">
                          Add {section.title} Image Here
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
