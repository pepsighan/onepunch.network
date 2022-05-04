import { Box, Container, Stack, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
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
          variant="h6"
          mt={2}
          color="textSecondary"
          textAlign="center"
        >
          A bridge network to transfer tokens between Ethereum and Shardeum
        </Typography>
      </Stack>
    </Container>
  );
}
