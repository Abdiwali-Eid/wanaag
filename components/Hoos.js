import React from 'react';
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
import { Typography } from '@mui/material';
import Head from 'next/head';
import { Alert, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';
import Kor from '../components/Kor';
import NextLink from 'next/link';
import classes from '../utils/classes';

const Hoos = () => {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  });
  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <Grid className="maylike-products-wrapper">
      <h2>You may also like</h2>
      <div className="marquee">
        <div className="maylike-products-container track">
          {products.map((product) => (
            <Grid item md={3} key={product.slug}>
              <ProductItem product={product}></ProductItem>
            </Grid>
          ))}
          {/* {products.map((item) => (
            <ProductItem key={item._id} product={item} />
          ))} */}
        </div>
      </div>
    </Grid>

    //  <div className="maylike-products-wrapper">
    //     <h2>You may also like</h2>
    //     <Grid container spacing={3} className="marquee">
    //     {products.map((product) => (
    //       <Grid item md={3} key={product.slug} className="maylike-products-container track">
    //         <ProductItem product={product}></ProductItem>
    //       </Grid>
    //     ))}
    //   </Grid>
    //   </div>
  );
};

export default Hoos;
