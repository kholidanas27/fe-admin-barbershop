import { Link, Typography } from '@mui/material';

export const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="barbershop-app.playfala.com">
      Barbershop App
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
