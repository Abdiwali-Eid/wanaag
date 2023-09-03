import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';

const Kormobil = () => {
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };
  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: 'error' });
      }
    };
    fetchCategories();
  }, [enqueueSnackbar]);
  const isDesktop = useMediaQuery('(min-width:800px)');

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  return (
    <div
    //   className="qibala"
      style={{ width: 'auto', marginTop: '40px', marginLeft: '10px' }}
      // sx={isDesktop ? classes.visible : classes.hidden}
    >
      <b
        style={{ margin: '40px', marginTop: '20px', fontSize: '17px' }}
        className="lax"
        // sx={isDesktop ? classes.visible : classes.hidden}
      >
        Book Categories
      </b>
      {categories.map((category) => (
        <NextLink
          key={category}
          href={`/search?category=${category}`}
          passHref
          // sx={isDesktop ? classes.visible : classes.hidden}
        >
          <ListItem button component="a" onClick={sidebarCloseHandler}>
            <ListItemText className='singlecat' primary={category}></ListItemText>
          </ListItem>
        </NextLink>
      ))}
    </div>
  );
};

export default Kormobil;
