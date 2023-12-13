import React from 'react'
import Card from './Cards';
import Sdata from './Sdata';

const App = () => {
  return (
    <>
      <h1 className='heading'>List of top 9 Netflix Series</h1>
      {Sdata.map((val) => (
        <Card
          key  = {val.id}
          img = {val.img}
          title = {val.title}
          sname = {val.sname}
          link = {val.links}
        />
      ))}
    </>
  );
};

export default App;