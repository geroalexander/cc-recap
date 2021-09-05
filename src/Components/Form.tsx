import React, { useEffect, useState } from 'react';
import { fetchData } from '../ApiClient/fetchData';

const Form = () => {
  const [step, setStep] = useState(3);

  // async function getData() {
  //   const res = await fetchData('HD', '2017-12-26', '2017-12-28');
  //   console.log('res', res);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  const checkStep = () => {
    if (step === 1) return selectStock();
    else if (step === 2) return selectStart();
    else if (step === 3) return selectEnd();
  };

  const selectStock = () => <span>one</span>;
  const selectStart = () => <span>two</span>;
  const selectEnd = () => <span>three</span>;

  return <div className="flex justify-center ">{checkStep()}</div>;
};

export default Form;
