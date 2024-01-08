import { Box, Button, Divider, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const CreateForm = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/movies/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      }).then(() => {});
    } catch (err) {
      alert(err);
    } finally {
      e.target.reset();
    }

    refreshPage();
  };
  const onChange = e => {
    setMovie(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onChangeCollectedArray = e => {
    setMovie(prevState => {
      return { ...prevState, [e.target.name]: e.target.value.split(', ') };
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h2>Редактирование / Создание</h2>
      <TextField
        label="Название фильма"
        onChange={onChange}
        required
        variant="outlined"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name={'title'}
      />
      <TextField
        label="Жанры"
        onChange={onChangeCollectedArray}
        required
        variant="outlined"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name={'genres'}
      />
      <TextField
        label="Длительность фильма (мин)"
        onChange={onChange}
        required
        variant="outlined"
        type="number"
        sx={{ mb: 3 }}
        fullWidth
        name={'runtime'}
      />
      <TextField
        label="Год выхода"
        onChange={onChange}
        required
        variant="outlined"
        type="number"
        sx={{ mb: 3 }}
        fullWidth
        name={'year'}
      />
      <TextField
        label="Описание фильма"
        onChange={onChange}
        required
        variant="outlined"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name={'plot'}
      />
      <TextField
        label="Ссылка на постер фильма"
        onChange={onChange}
        required
        variant="outlined"
        type="url"
        sx={{ mb: 3 }}
        fullWidth
        name={'posterUrl'}
      />
      <TextField
        label="Рейтинг"
        onChange={onChange}
        required
        variant="outlined"
        type="number"
        sx={{ mb: 3 }}
        fullWidth
        name={'rating'}
      />
      <TextField
        label="Список актеров"
        onChange={onChange}
        required
        variant="outlined"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name={'actors'}
      />
      <TextField
        label="Режиссер"
        onChange={onChange}
        required
        variant="outlined"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name={'director'}
      />
      <Divider sx={{ mb: 5 }}></Divider>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/`}>
          <Button variant="outlined">Отменить</Button>
        </Link>
        <Button color="button" variant="contained" type="submit">
          Сохранить
        </Button>
      </Box>
    </form>
  );
};
