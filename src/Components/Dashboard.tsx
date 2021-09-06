import { setPriority } from 'os';
import React, { SetStateAction, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchData } from '../ApiClient/fetchData';
import StockChart from '../Components/StockChart';
import { calculateMDD, calculateRoR } from '../Service/helpers';

interface LocationState {
  selectedStock: string;
  startDate: string;
  endDate: string;
}

const Dashboard = ({
  location,
}: RouteComponentProps<{}, {}, LocationState>) => {
  const query: LocationState = location.state;
  const { selectedStock, startDate, endDate } = query;

  const [data, setData] = useState([]);
  const [mdd, setMDD] = useState('');
  const [ror, setRoR] = useState('');

  async function getData() {
    const res = await fetchData(selectedStock, startDate, endDate);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length) {
      setMDD(calculateMDD(data));
      setRoR(calculateRoR(data));
    }
  }, [data]);

  return (
    <div>
      {data.length ? (
        <div>
          <p>maximum drawdown {mdd}%</p>
          <p>rate of return {ror}%</p>
          <StockChart data={data} />
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
