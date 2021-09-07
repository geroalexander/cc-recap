import React, { SetStateAction, useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
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

  const [fail, setFail] = useState('');

  async function getData() {
    try {
      const res = await fetchData(selectedStock, startDate, endDate);
      setData(res.data);
    } catch (error) {
      setFail('Cannot find data on your stock. Try again!');
    }
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
    <div className="flex justify-center h-screen items-center bg-gradient-to-br from-gray-900 via-recap-blue to-gray-800 font-mono">
      {data.length ? (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center pb-4">
            <h1 className="text-4xl text-white font-bold">{selectedStock}</h1>
            <Link to="/">
              <h1 className="text-white text-6xl pb-1">&#8634;</h1>
            </Link>
          </div>
          <StockChart data={data} />
          <div className="flex flex-row text-white p-3 justify-around text-xl">
            <p className="flex flex-col items-center">
              <span>Maximum Drawdown</span>
              <span>{mdd}%</span>
            </p>
            <p className="flex flex-col items-center">
              <span>Rate of Return</span>
              <span>{ror}%</span>
            </p>
          </div>
        </div>
      ) : null}
      {fail && (
        <div className="flex flex-col text-white text-xl justify-center items-center">
          {fail}{' '}
          <Link to="/">
            <h1 className="text-white text-6xl pb-1">&#8634;</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
