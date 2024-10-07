import './App.css'
import studentsJSON from '../students-2024.json'
import { useState, useEffect } from 'react'
import type {FC} from 'react'
import { Student, StudentData } from './Student'

export const StudentsList: FC = () => {
  const students = studentsJSON as Array<StudentData>

  const [isLoading, setIsLoading] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  const [filteredStudents, setFilteredStudents] = useState<Array<StudentData>>([])

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

  const onFilterClick = () => {
    // if(isFiltered){
    //   setFilteredStudents(students)
    // } else {
    //   setFilteredStudents(students.filter(student => student.attendance === "Regular"))
    // }
    setFilteredStudents(students.filter(student => isFiltered || student.attendance === "Regular"))
    setIsFiltered(prevValue => !prevValue)
  }

  return (
    <>
    {isLoading ?   (
        <p>Cargando...</p>
      ) : 
      filteredStudents.length > 0 ? <>
          <h3>A continuación se mostrará el listado de alumnos</h3>
          <button onClick={onFilterClick}>Filtrar alumnos libres</button>
          <ul>
          {filteredStudents.map(student => <Student {...student}/>) }
          </ul>
          <p>La cantidad total de alumnos es: {filteredStudents.length}</p>
        </>
        :
        <h3>No se encontraron alumnos para este curso!</h3>
      }
    </>
  )
}

