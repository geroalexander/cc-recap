import React, { SetStateAction, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchData } from '../ApiClient/fetchData';

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

  async function getData() {
    const res = await fetchData(selectedStock, startDate, endDate);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  const calculateRoR = () => {
    const endDateValue = data[data.length - 1][11];
    const startDateValue = data[0][11];

    const RoR = ((endDateValue - startDateValue) / startDateValue) * 100;
    return RoR.toFixed(2);
  };

  const calculateMDD = () => {
    const sortedData = data;
    sortedData.sort((a, b) => b[11] - a[11]);

    let p = 0;
    let t = sortedData.length - 1;
    let peakDate = sortedData[p][0];
    let troughDate = sortedData[t][0];

    while (peakDate > troughDate) {
      p++;
      peakDate = sortedData[p][0];
    }

    const MDD =
      ((sortedData[t][11] - sortedData[p][11]) / sortedData[p][11]) * 100;
    return MDD.toFixed(2);
  };

  return (
    <div>
      {data.length ? (
        <div>
          <p>maximum drawdown {calculateMDD()}%</p>
          <p>rate of return {calculateRoR()}%</p>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
