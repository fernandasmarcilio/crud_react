import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  tableBody: {
    padding: '2rem 1rem',
  }
}));

export default useStyles;