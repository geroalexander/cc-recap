# cc-recap

A web application built with React.js that allows the user to input a stock symbol (ticker), and view the maximum drawdown & simple rate of return for a given timeframe.

### Starting the development environment

1. install dependencies ``` npm install ```
2. create a .env file in the root folder ``` touch .env ```
3. in the .env file, set variable ```REACT_APP_QUANDL_API_KEY="YOUR API KEY"``` - create a free account on [quandl](https://www.quandl.com/)
4. start the development server with ``` npm start ``` or ``` nodemon ``` - ee how to install nodemon [here](https://www.npmjs.com/package/nodemon).


### Using the application

1. Type in a stock symbol (ticket) in the right format. eg. Facebook is FB, Home Depo, is HD, etc.
2. Select a start date
3. Select an end date (must be after the start date)
4. NOTE: The free version only has limited data for each stock. If it doesn't work, try again with a differnt date range or make sure your stock symbol is correct.


### Tech Stack

[React](reactjs.org)  
[TailwindCSS](tailwindcss.com)  
[Quandl-EOD-API](https://www.quandl.com/data/EOD-End-of-Day-US-Stock-Prices) - for the data  
[ApexCharts.js](https://apexcharts.com/) - to display data graphically   
[TypeScript](https://www.typescriptlang.org/)


