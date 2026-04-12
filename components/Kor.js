import { List, ListItemText, ListItemButton, Typography } from '@mui/material';

import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';
import axios from 'axios';
import NextLink from 'next/link';

const Kor = () => {
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

  return (
    <aside className="category-panel qibala">
      <div className="category-header">
        <Typography className="category-title">Book Categories</Typography>
        <span className="category-count">{categories.length}</span>
      </div>
      <List className="category-list" disablePadding>
        {categories.map((category) => (
          <NextLink
            key={category}
            href={`/search?category=${category}`}
            passHref
          >
            <ListItemButton
              component="a"
              className="category-item"
            >
              <ListItemText primary={category} className="category-item-text" />
            </ListItemButton>
          </NextLink>
        ))}
      </List>
    </aside>
  );
};

export default Kor;
