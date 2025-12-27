import './App.css';
import subjectJSON from './data/subject-info.json';
import { StudentsList } from './modules/students';
import { Subject } from './types/subject.types';

function App() {
  const subject = subjectJSON as Subject
  
  return (
    <div>
      <h1>Hola clase de {subject.name}</h1>
      <h2>Los saluda {subject.teacher}</h2>
      <StudentsList />
    </div>
  )
}

export default App
