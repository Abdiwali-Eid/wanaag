import Link from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';
import bugaag from './/../amazon-sanity/schemas/bugaag';

const Product = ({
  bugaag: {
    name,
    price,
    Author,
    image,
    description,
    slug,
    brand,
    category,
    rating,
    pages,
    featured,
    releaseDate,
  },
}) => {
  return (
    <div>
      <Link href={`/bugaag/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlForThumbnail(image && image[0])}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p>{name}</p>
          <p className="author">{Author}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
