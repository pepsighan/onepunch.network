import { Box, Container, Stack, Typography } from '@mui/material';
import Logo from 'components/Logo';

export default function Home() {
  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        py={8}
      >
        <Box width={500}>
          <Logo />
        </Box>

        <Typography variant="h6" mt={2} color="textSecondary">
          A bridge network to transfer tokens between Ethereum and Shardeum
        </Typography>
      </Stack>
    </Container>
  );
}
