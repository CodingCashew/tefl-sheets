import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const Home: React.FC = () => {
  return (
    <Box width="100%">
      <Container maxWidth="lg" style={{ display: 'flex', backgroundColor: 'green' }}>
        <Typography variant="h3" style={{ backgroundColor: 'blue' }}>
          Welcome to the Home Page
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;