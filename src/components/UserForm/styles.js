import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 2, 0),
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0),
    },
  },
  inputContainer: {
    margin: theme.spacing(2, 0),
  }
}));

export default useStyles;