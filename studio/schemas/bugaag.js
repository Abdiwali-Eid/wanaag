export default {
  name: 'bugaag',
  title: 'bugaag',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date',
    },

    {
      name: 'Author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },

    {
      name: 'pages',
      title: 'Pages',
      type: 'number',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [{field: 'releaseDate', direction: 'desc'}],
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [{field: 'releaseDate', direction: 'asc'}],
    },
  ],
}
