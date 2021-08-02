import React from 'react';
import { Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import { Search, AccountCircle} from '@material-ui/icons';

import useStyles from './styles';

function Header({title, inputPlaceholder, user, searchOnChange}) {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <Toolbar>
        <Typography className={classes.title} variant="h4" noWrap>
        {title}
        </Typography>
        <div className={classes.searchContainer}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder={inputPlaceholder}
            classes={{
              root: classes.inputRoot,
            }}
            inputProps={{ 'aria-label': 'search' }}
            type="search" 
            onChange={searchOnChange}
          />
        </div>
        <div className={classes.userContainer}>
          <IconButton
            onClick={() =>{}}
            color="inherit"
            >
            <AccountCircle fontSize="large" />
          </IconButton>
          <div className="userIf">
            <Typography variant="body1">{user.name}</Typography>
            <Typography variant="body2">{user.type}</Typography>
          </div>
        </div>
      </Toolbar>
    </div>
  );
}

export default Header;