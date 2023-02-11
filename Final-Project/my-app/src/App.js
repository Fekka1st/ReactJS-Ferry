import React from 'react';
import Routes from './Routes/Routes'
import 'antd/dist/antd.css';
import { AppProvider } from './Context/Appcontext';
const App=()=> {
  return (
    <>
     <AppProvider>
     <Routes/>
     </AppProvider>
    </>
  );
}

export default App;
