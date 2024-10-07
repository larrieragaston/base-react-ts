import { useState, useEffect } from 'react'
import type {FC} from 'react'
import studentsJSON from '../../data/students-2024.json';
import type { StudentProps } from '../../types/student.types';
import { StudentsFilters } from './StudentsFilters';
import { StudentsTable } from './StudentsTable';
import subjectJSON from '../../data/subject-info.json';
import { Subject } from '../../types/subject.types';

export const StudentsList: FC = () => {
  const students = studentsJSON as Array<StudentProps>
  const subject = subjectJSON as Subject

  const [isLoading, setIsLoading] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  const [filteredStudents, setFilteredStudents] = useState<Array<StudentProps>>([])
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
      console.log('Buscando la informacion de los alumnos...')
      setIsLoading(true)
    const timer = setTimeout(() => {
      console.log('Ejecutado despues de 5 segundos!')
      setFilteredStudents(students)
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    setFilteredStudents(students.filter(student => 
      (!isFiltered || student.attendance === "Regular") && 
      student.name.toLowerCase().includes(searchText.toLowerCase())))
  }, [isFiltered, searchText])

  return (
    <>
    <h1>Hola clase de {subject.name}</h1>
    <h2>Los saluda {subject.teacher}</h2>
    {isLoading ? 
      <p>Cargando...</p> :
      <>
        <StudentsFilters 
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
          searchText={searchText}
          setSearchText={setSearchText}/>
          
        <StudentsTable students={filteredStudents}/>
      </>
      }
    </>
  )
}

