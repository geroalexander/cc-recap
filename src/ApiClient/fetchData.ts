const serverURL = 'https://www.quandl.com/api/v3/datasets/EOD/';
const { REACT_APP_QUANDL_API_KEY } = process.env;

async function fetchData(stock: string, start: string, end: string) {
  const url =
    serverURL +
    stock +
    `?start_date=${start}` +
    `&end_date=${end}` +
    `&api_key=${REACT_APP_QUANDL_API_KEY}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { dataset } = await res.json();
  return dataset;
}

export { fetchData };
