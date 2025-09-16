import studentsJSON from '../../data/students-2025.json'
import { useState, useEffect } from 'react'
import type { FC } from 'react'
import type { StudentProps } from '../../types/student.types'
import { StudentsFilters } from './StudentsFilters'
import { StudentsTable } from './StudentsTable'
import subjectJSON from '../../data/subject-info.json'
import { Subject } from '../../types/subject.types'
import { Spin, Typography } from 'antd'
import { content } from '../../utils/content'

const { Title } = Typography

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
  }, [students])

  useEffect(() => {
    setFilteredStudents(
      students.filter(
        (student) =>
          (!isFiltered || student.attendance === 'Regular') &&
          student.name.toLowerCase().includes(searchText.toLowerCase())
      )
    )
  }, [isFiltered, searchText, students])

  return (
    <>
      <Title level={2}>Los saluda {subject.teacher}</Title>
      {isLoading ? (
        <Spin tip="Cargando informacion del curso..." size="large">
          {content}
        </Spin>
      ) : (
        <>
          <StudentsFilters
            isFiltered={isFiltered}
            setIsFiltered={setIsFiltered}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          <StudentsTable students={filteredStudents} />
        </>
      )}
    </>
  )
}
