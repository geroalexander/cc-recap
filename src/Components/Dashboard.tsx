import React, { useEffect, useState } from 'react';
import { fetchData } from '../ApiClient/fetchData';

const Dashboard = () => {
  const [data, setData] = useState();

  // async function getData() {
  //   const res = await fetchData('HD', '2017-12-26', '2017-12-28');
  //   console.log('res', res);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return <div>hello</div>;
};

export default Dashboard;
