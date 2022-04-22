import React from 'react';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';

const Categories = () => {

  const {state: category} = useLocation()

return(
  <>
  <div className="container">
    <Button onClick = {() => console.log(category)} type="primary">Categories Page</Button>
  </div>
  </>
)
}

export default Categories;
