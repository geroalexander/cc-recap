import React, { useEffect, useState } from 'react';
import { fetchData } from '../ApiClient/fetchData';

const Form = () => {
  const [step, setStep] = useState(1);
  const [stock, setStock] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showError, setShowError] = useState(false);
  const [searchQuery, setSearchQuery] = useState({});

  // async function getData() {
  //   const res = await fetchData('HD', '2017-12-26', '2017-12-28');
  //   console.log('res', res);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    showError && setShowError(false);
  }, [step]);

  const checkStep = () => {
    if (step === 1) return selectStock();
    else if (step === 2) return selectStart();
    else if (step === 3) return selectEnd();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 1 && stock) setStep(2);
    else if (step === 2 && startDate) setStep(3);
    if (step === 3) setSearchQuery({ stock, startDate, endDate });
    else setShowError(true);
  };

  const selectStock = () => (
    <form onSubmit={handleSubmit}>
      <label>
        Stock:
        <input
          className="border-2"
          type="text"
          name="Stock"
          value={stock}
          onChange={(event) => setStock(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </label>
    </form>
  );

  const selectStart = () => (
    <form onSubmit={handleSubmit}>
      <label>
        Selet start date
        <input
          className="border-2"
          type="date"
          name="Start"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </label>
    </form>
  );

  const selectEnd = () => (
    <form onSubmit={handleSubmit}>
      <label>
        Select end date
        <input
          className="border-2"
          type="date"
          name="End"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </label>
    </form>
  );

  return (
    <>
      <div className="flex justify-center ">{checkStep()}</div>
      {showError && <p>error</p>}
    </>
  );
};

export default Form;
