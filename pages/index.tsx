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
  useMediaQuery,
} from '@mui/material';
import { useRouter } from 'next/router';

import { Alert, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';
import Kor from '../components/Kor';
import Dheex from '../asset/reading-books.png';
import classes from '../utils/classes';
import imsgg from '../public/reading-books.png';
import Hoos from '../components/Hoos';
import Kormobil from '../components/Kormobil';
import NextLink from 'next/link';

export default function Home() {
  const router = useRouter();
  // const [state, setState] = useState({
  //   products: [],
  //   error: '',
  //   loading: true,
  // });
  // const { loading, error, products } = state;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const products = await client.fetch(`*[_type == "product"]`);
  //       setState({products, loading: false });
  //     } catch (err) {
  //       setState({loading: false, error: err.message });
  //     }
  //   };
  //   fetchData();
  // }, []);
  const [state, setState] = useState({
    products: null,
    loading: true,
    error: '',
  });
  const { products, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(
          ` *[_type == "bugaag" && featured == "Popular" ]`
        );
        setState({ ...state, products, loading: false });
      } catch (err) {
        if (err instanceof Error) {
          // ✅ TypeScript knows err is Error
          setState({ ...state, error: err.message, loading: false });
        } else {
          console.log('Unexpected error', err);
        }
      }
    };
    fetchData();
  }, []);

  const isDesktop = useMediaQuery('(min-width:900px)');
  const isDesktops = useMediaQuery('(min-width:700px)');
  const istablet = useMediaQuery('(min-width:1000px)');
  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <div className="Content">
            <Grid
              className="nud"
              style={
                {
                  // backgroundColor: 'white',
                  // width: '100vw',
                  // backgroundColor:'gold'
                }
              }
            >
              <div className="midig">
                {/* Read PDF Books <br /> Online<br/>  <span className='sixid'>
                start your learning journary by browsing millions of <br />
                books from our library */}
                <Grid sx={isDesktop ? classes.visible : classes.hidden}>
                  <span className="ciwan">
                    Si free ah u la dag{' '}
                    <span style={{ color: 'rgb(85, 128, 170)' }}>
                      Buugaag PDF ah
                    </span>
                    <br /> {' '}
                  </span>
                </Grid>
                <Grid sx={isDesktop ? classes.hidden : classes.visible}>
                  <span className="ciwan">
                  Si free ah u la dag &nbsp;
                    <span style={{ color: 'rgb(85, 128, 170)' }}>
                    Buugaag PDF ah &nbsp;
                    </span>
                    
                  </span>
                </Grid>
                <br />
                si fudud oo bilaash ah ayaad kula dagi kartaa buugaag afsooomaaliga ku qoran
                <br />
                <button
                  className="button-5"
                  role="button"
                  onClick={submitHandler}
                >
                  See All books
                </button>
                {/* <p> </p> */}
              </div>
              <div className="image-div">
                <img
                  src="https://hostacmee.space/demo/bookchoix/wp-content/uploads/revslider/slider-1/girl-reading-books-online.png"
                  alt=""
                  // width={'660px'}
                  className="images"
                />
              </div>
            </Grid>
            <div className="nuuro">
              <Grid
                className="popular"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Grid>
                  <b style={{ fontSize: '20px' }}>Popular Books</b>
                </Grid>

                <Grid>
                  <NextLink href="" onClick={submitHandler}>
                    <Link
                      style={{
                        color: 'rgb(85, 128, 170)',
                        paddingRight: '15px',
                      }}
                    >
                      Arag Dhammaan
                    </Link>
                  </NextLink>
                </Grid>
              </Grid>
              <br />
              <div style={{ display: 'flex' }} className="afdalu">
                <Grid sx={isDesktop ? classes.visible : classes.hidden}>
                  <Kor />
                </Grid>
                <div className="bordere"> </div>

                <Grid
                  sx={isDesktop ? classes.visible : classes.hidden}
                  className="Akh"
                >
                  <Grid
                    container
                    spacing={4}
                    className="caymis"
                    style={{ paddingRight: '20px' }}
                  >
                    {products.map((bugaag) => (
                      <Grid item md={3} key={bugaag.slug} className="caymis2">
                        <ProductItem bugaag={bugaag}></ProductItem>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid sx={isDesktop ? classes.hidden : classes.visible}>
                  <Grid
                    container
                    spacing={4}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      paddingRight: '20px',
                    }}
                    className="tablet"
                  >
                    {products.map((bugaag) => (
                      <Grid item md={3} key={bugaag.slug}>
                        <ProductItem bugaag={bugaag}></ProductItem>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </div>
              <Grid sx={isDesktops ? classes.hidden : classes.visible}>
                <Kormobil />
              </Grid>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
