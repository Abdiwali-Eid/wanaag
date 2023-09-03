import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';

export default function ProductItem({ bugaag }) {
  return (
    <Card>
      <NextLink href={`/bugaag/${bugaag.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(bugaag.image)}
            title={bugaag.name}
          ></CardMedia>
          <CardContent>
            <Typography className="namecol">{bugaag.name}</Typography>
            <Typography className="author">{bugaag.Author}</Typography>
            {/* <Typography>
              {product.rating} ({product.numReviews} reviews)
              </Typography> */}
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        {/* <Typography>${product.price}</Typography>
          <Button size="small" color="primary">
          <a  href="/files/NUUN.pdf" alt="alt text"  target="_blank" rel="noopener noreferrer" >Add to Cart</a> 

          </Button> */}
      </CardActions>
    </Card>
  );
}
