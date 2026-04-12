import { createTheme } from '@mui/material/styles';
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
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';
import Kor from './Kor';

import { MdOutlineEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';
import Script from 'next/script';
// import TagManager from 'react-gtm-module';
// import Script from 'next/script';

export default function Layout({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, userInfo } = state;
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'All books', href: '/search' },
    { label: 'About', href: '/about' },
  ];
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      // mode: 'light',
      // mode: darkMode ? 'dark' : 'light',
      primary: {
        main: 'rgb(120, 176, 232)',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
  //   const newDarkMode = !darkMode;
  //   jsCookie.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  // };
  const [anchorEl, setAnchorEl] = useState(null);
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    jsCookie.remove('userInfo');
    jsCookie.remove('cartItems');
    router.push('/');
  };
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
  // const isTablet=@media screen and (min-width: 800px)and (max-width: 1124px)

  const isDesktop = useMediaQuery('(min-width:1100px)', { noSsr: true });

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  const isActiveRoute = (href) =>
    router.pathname === href || (href === '/search' && router.pathname === '/search');
  return (
    <>
      <Head>
        <title>{title ? `${title} - Buugaag` : 'Buugaag'}</title>
        {description && <meta name="description" content={description}></meta>}

        <meta
          name="google-site-verification"
          content="yrb_uJ-LQ_JxLLRmEgOW_Dp2cFsCGttQUvX4_QgETJ8"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/L156pv9/studio-image.jpg"
        />
      </Head>
      <ThemeProvider theme={theme} className="fak">
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                sx={classes.menuButton}
                className="menuicons"
              >
                <MenuIcon sx={classes.navbarButton} />
              </IconButton>

              <NextLink href="/" passHref>
                <Link>
                  <Typography
                    sx={classes.brand}
                    style={{ paddingBottom: '20px' }}
                  >
                    Buugaag
                  </Typography>
                </Link>
              </NextLink>
            </Box>

            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
              PaperProps={{ className: 'drawer-panel' }}
            >
              <List className="drawer-list">
                <ListItem className="drawer-header">
                  <Box className="drawer-brand-wrap">
                    <Typography className="drawer-brand">Buugaag</Typography>
                    <Typography className="drawer-subtitle">
                      Discover books in Somali and beyond
                    </Typography>
                  </Box>
                  <IconButton
                    aria-label="close"
                    onClick={sidebarCloseHandler}
                    className="drawer-close"
                  >
                    <CancelIcon />
                  </IconButton>
                </ListItem>
                <Divider light />
                {navItems.map((item) => (
                  <NextLink key={item.href} href={item.href} passHref>
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                      className={`drawer-link ${
                        isActiveRoute(item.href) ? 'active' : ''
                      }`}
                    >
                      {item.label}
                    </ListItem>
                  </NextLink>
                ))}

                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      {/* <NextLink href="" onClick={submitHandler}>
                  <Link style={{ color: 'black' }}>All books</Link>
                </NextLink> */}
                      <ListItemText primary={category}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>
            <Box
              sx={isDesktop ? classes.visible : classes.hidden}
              className="desktop-search-wrap"
            >
              <form onSubmit={submitHandler} className="desktop-search-form">
                <Box sx={classes.searchForm} className="desktop-search-box">
                  <InputBase
                    name="query"
                    sx={classes.searchInput}
                    placeholder="Search Books"
                    onChange={queryChangeHandler}
                    className="desktop-search-input"
                  />
                  <IconButton
                    type="submit"
                    sx={classes.searchButton}
                    aria-label="search"
                    className="desktop-search-btn"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </form>
            </Box>
            <Box>
              {/* <Switch
                color="success"
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch> */}
              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    sx={classes.navbarButton}
                    onClick={loginClickHandler}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <IconButton
                    component="a"
                    aria-label="login"
                    className="login-link"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </NextLink>
              )}
            </Box>
          </Toolbar>
          <Box
            sx={{ display: isDesktop ? 'flex' : 'none' }}
            className="desktop-nav-shell"
          >
            <nav className="desktop-nav" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NextLink key={item.href} href={item.href} passHref>
                  <Link
                    className={`desktop-nav-link ${
                      isActiveRoute(item.href) ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </NextLink>
              ))}
            </nav>
          </Box>

          <Box
            style={{ backgroundColor: 'white', height: '64px' }}
            sx={isDesktop ? classes.hidden : classes.visible}
            className="mobile-search-shell"
          >
            <form onSubmit={submitHandler} className="mobile-search-form">
              <Box
                sx={classes.searchForm}
                className="searchkayga mobile-search-box"
              >
                <InputBase
                  name="query"
                  sx={classes.searchInput}
                  placeholder="Search Books"
                  onChange={queryChangeHandler}
                  className="inputbasekayga mobile-search-input"
                />
                <IconButton
                  type="submit"
                  sx={classes.searchButton}
                  aria-label="search"
                  className="yaris mobile-search-btn"
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </form>
          </Box>
        </AppBar>

        <Container
          component="main"
          sx={classes.main}
          className="mains"
          style={{ margin: '0', padding: '0' }}
        >
          {/* <div style={{ width: '160px' }}>
            {categories.map((category) => (
              <NextLink
                key={category}
                href={`/search?category=${category}`} 
                passHref
              >
                <ListItem button component="a" onClick={sidebarCloseHandler} >
                  <ListItemText primary={category}  sx={isDesktop ? classes.visible : classes.hidden}></ListItemText>
                </ListItem>
              </NextLink>
            ))}
          </div> */}
          {/* 
          <div
            style={{ backgroundColor: 'red', height: '200px' }}
            className="dhex"
          >
            soomaaliya
          </div> */}

          <br />

          {/* <Kor/> */}

          {children}
          {/* <span style={{backgroundColor:'red'}}>runta</span> */}
        </Container>

        <Box
          component="footer"
          sx={classes.footer}
          style={{ backgroundColor: 'rgb(120, 176, 232)' }}
        >
          <Typography>Xuquuqdu way ilaalshan tahay. Buugaag.</Typography>{' '}
          <BsFacebook /> <BsLinkedin /> <BsTwitter />
        </Box>
      </ThemeProvider>
    </>
  );
}
