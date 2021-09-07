import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [step, setStep] = useState(1);
  const [selectedStock, setSelectedStock] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    showError && setShowError(false);
  }, [step]);

  useEffect(() => {}, []);

  const checkStep = () => {
    if (step === 1) return selectStock();
    else if (step === 2) return selectStart();
    else if (step === 3) return selectEnd();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 1 && selectedStock) setStep(2);
    else if (step === 2 && startDate) setStep(3);
    else if (step === 3 && endDate)
      history.push('/dashboard', { selectedStock, startDate, endDate });
    else setShowError(true);
  };

  const selectStock = () => (
    <form onSubmit={handleSubmit} className="flex items-center flex-col">
      <h1 className="text-4xl text-white pb-6 font-bold">
        Enter a stock symbol:
      </h1>
      <input
        className="bg-transparent text-center text-white text-3xl w-full border-b-2 outline-none py-1 mb-7"
        type="text"
        name="Stock"
        value={selectedStock}
        onChange={(event) => setSelectedStock(event.target.value)}
        placeholder="Type your stock here..."
      />
      <input
        type="submit"
        value="Next"
        className="bg-transparent text-white border-white-900 border-2 px-4 py-2 rounded-md"
      />
    </form>
  );

  const selectStart = () => (
    <form onSubmit={handleSubmit} className="flex items-center flex-col">
      <h1 className="text-4xl text-white pb-6 font-bold">
        Choose a start date...
      </h1>
      <input
        className="bg-transparent text-start text-black text-3xl w-full border-b-2 border-black outline-none py-1 mb-7 filter invert"
        type="date"
        name="Start"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
      />
      <input
        type="submit"
        value="Next"
        className="bg-transparent text-white border-white-900 border-2 px-4 py-2 rounded-md"
      />
    </form>
  );

  const selectEnd = () => (
    <form onSubmit={handleSubmit} className="flex items-center flex-col">
      <h1 className="text-4xl text-white pb-6 font-bold">...and a end date.</h1>
      <input
        className="bg-transparent text-start text-black text-3xl w-full border-b-2 border-black outline-none py-1 mb-7 filter invert"
        type="date"
        name="End"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
      />
      <input
        type="submit"
        value="Next"
        className="bg-transparent text-white border-white-900 border-2 px-4 py-2 rounded-md"
      />
    </form>
  );

  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-br from-gray-900 via-recap-blue to-gray-800 font-mono flex-col">
      {checkStep()}
      {showError && (
        <p className="bg-transparent m-4 absolute mt-80 z-10 justify-center items-center w-auto text-center text-red-500 font-bold">
          Please enter appropriate values.
        </p>
      )}
    </div>
  );
};

export default Form;
