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
    background: 'linear-gradient(135deg, rgb(73, 112, 152) 0%, rgb(85, 128, 170) 45%, rgb(120, 176, 232) 100%)',
    boxShadow: '0 16px 32px rgba(22, 34, 47, 0.14)',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    minHeight: '84px',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '-0.03em',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
    borderRadius: 999,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(10px)',
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
    border: '1px solid rgba(255, 255, 255, 0.28)',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 999,
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
  },
  searchInput: {
    paddingLeft: 1,
    color: '#ffffff',
    '& ::placeholder': {
      color: 'rgba(255, 255, 255, 0.72)',
    },
  },
  searchButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    padding: 1,
    borderRadius: '0 999px 999px 0',
    '& span': {
      color: '#ffffff',
    },
  },
};

export default classes;
