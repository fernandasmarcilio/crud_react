import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    padding: theme.spacing(1, 0),
  },
  title: {
    flexGrow: 1,
    fontWeight: 300,
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
     marginRight: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
    borderBottom: '1px solid gray',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;