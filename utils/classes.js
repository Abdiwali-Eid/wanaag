const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: '15px',
  },
  main: {
    // marginTop: 1,
    minHeight: '80vh',
    margin: 0,
    padding: 0,
  },
  footer: {
    marginTop: 1,
    textAlign: 'center',
  },
  appbar: {
    backgroundColor: 'rgb(85, 128, 170)',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  fullWidth: {
    width: '100%',
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  // search
  tops: {
    backgroundColor: 'red',
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  searchButton: {
    backgroundColor: 'rgb(85, 128, 170)',
    padding: 1,

    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
};

export default classes;
