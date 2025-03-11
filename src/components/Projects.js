import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';

const Projects = () => {
  const [possibleWords, setPossibleWords] = useState([]);
  const [word, setWord] = useState('');
  const [feedback, setFeedback] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/wordle-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word: word,
          feedback: feedback
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setPossibleWords(data.suggestions);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to the server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">
          Projects
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Wordle Cheat
          </Typography>
          
          <Typography variant="body1" paragraph>
            A tool to help solve the daily Wordle puzzle. Enter your guess and the color feedback
            you received (g for green, y for yellow, b for black/grey).
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your guess"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  helperText="Enter your 5-letter word"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  helperText="Enter feedback (e.g., 'bygbg' for 🟨⬛️🟩⬛️🟩)"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                  sx={{ mt: 2 }}
                >
                  {loading ? 'Loading...' : 'Get Suggestions'}
                </Button>
                {error && (
                  <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>

          <Typography variant="h6" gutterBottom>
            Possible Words:
          </Typography>
          <Box sx={{ 
            maxHeight: 200, 
            overflowY: 'auto',
            p: 2,
            backgroundColor: 'rgba(0,0,0,0.02)',
            borderRadius: 1
          }}>
            {possibleWords.length > 0 ? (
              <Grid container spacing={1}>
                {possibleWords.map((word, index) => (
                  <Grid item key={index}>
                    <Typography variant="body1">
                      {word}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Enter a word and its feedback to see suggestions
              </Typography>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Projects;
