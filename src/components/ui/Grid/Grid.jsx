import React, { useMemo } from 'react';

import { prepareGridLayout } from './Grid.utils';

import StyledGrid from './Grid.styles';

const Grid = props => {

  const preparedColumns = useMemo(() => {
    return prepareGridLayout(props.columns);
  }, [props.columns]);

  const preparedRows = useMemo(() => {
    return props.rows ? prepareGridLayout(props.rows) : '';
  }, [props.rows]);

  return (
    <StyledGrid
      { ...props }
      columns={ preparedColumns }
      rows={ preparedRows }
    />
  );
};

export default Grid;