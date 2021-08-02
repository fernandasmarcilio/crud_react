import React from 'react';

import TableHeader from './TableHeader';
import TableContent from './TableContent';

import useStyles from './styles';

function Table({ title, data, handleOpenModal }) {
  const classes = useStyles();

  return (
    <>
      <TableHeader title={title} handleOpenModal={handleOpenModal} />
      <div className={classes.tableBody}>
        <TableContent data={data} />
      </div>
    </>
  );
}

export default Table;