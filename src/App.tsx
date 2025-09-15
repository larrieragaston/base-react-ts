import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './modules/home';
import { StudentsList } from './modules/students';

export const App = () => 
(<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<StudentsList />} />
      </Routes>
    </BrowserRouter>
  </div>)
