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
                  image={item.image}
                  title={item.title}
                  outlink={item.outlink}
                  inlink={item.inlink}
                  text={item.text}
                  footer={item.footer}
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
