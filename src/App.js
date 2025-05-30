import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './Compontent/Login';
import RegisterForm from './Compontent/RegisterForms';
import TablePage from './Compontent/TablePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
         <Route path="/registerforms" element={<RegisterForm />} />
           <Route path="/tablepage" element={<TablePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;