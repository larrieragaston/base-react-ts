import './App.css';
import subjectJSON from '../subject-info.json';
import { StudentsList } from './StudentsList';

interface Subject {
  name: string,
  teacher_id: number,
  teacher: string,
  is_promotable: "S" | "N",
  correlative: Array<string>
}

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
