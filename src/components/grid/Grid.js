import React from 'react';
import _ from 'underscore';

import Card from '../card/Card'

const Grid = ({ itemMatrix }) => {
  return (
    <div className='grid'>
      <div className='container'>
        {_.map(itemMatrix, (row, index) => (
          <div className='row row-eq-height' key={index}>
            {_.map(row, item => (
              <div className='col' key={item.id}>
                <Card
                  image={item.avatar_url}
                  title={item.login}
                  outlink={item.html_url}
                  inlink={`/${item.id}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
