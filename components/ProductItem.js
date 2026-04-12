import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';

export default function ProductItem({ bugaag }) {
  return (
    <Card className="book-card">
      <NextLink href={`/bugaag/${bugaag.slug.current}`} passHref>
        <CardActionArea className="book-card-action">
          <div className="book-card-media-wrap">
            <span className="book-card-badge">PDF</span>
            <CardMedia
              component="img"
              image={urlForThumbnail(bugaag.image)}
              title={bugaag.name}
              className="book-card-image"
            ></CardMedia>
          </div>
          <CardContent className="book-card-content">
            <Typography className="namecol book-title">{bugaag.name}</Typography>
            <Typography className="author book-author">{bugaag.Author}</Typography>
            <Typography className="book-meta">Read online and download</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}
