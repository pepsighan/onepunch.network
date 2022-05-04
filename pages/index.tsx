import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import Logo from 'components/Logo';

export default function Home() {
  return (
    <Container sx={{ px: 3 }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        py={8}
      >
        <Box
          component="img"
          src="/one-punch.png"
          alt="One Punch Logo"
          bgcolor={orange[200]}
          p={2}
          borderRadius="100%"
        />

        <Box maxWidth={460} width="100%" mt={3}>
          <Logo />
        </Box>

        <Typography
          mt={1}
          textAlign="center"
          color="textSecondary"
          fontSize="1.05rem"
        >
          A bridge network to transfer tokens between Ethereum and Shardeum
        </Typography>

        <Button
          component="a"
          href="https://twitter.com/onepunchnetwork"
          variant="outlined"
          sx={{ mt: 4 }}
        >
          Follow Progress on Twitter
        </Button>
      </Stack>
    </Container>
  );
}
