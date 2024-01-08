import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'customColor.base_02' }}>
      <Toolbar>
        <Link to={'/'} style={{ flexGrow: 1, color: '#000', fontWeight: 'bold' }}>
          Админка фильмотеки
        </Link>
        <Button variant="contained" color="button">
          6409 Гафуров Алик
        </Button>
      </Toolbar>
    </AppBar>
  );
};
