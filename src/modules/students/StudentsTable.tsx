import type { FC } from 'react'
import type { StudentsTableProps } from '../../types/student.types'
import { Student } from '../../components/Student'
import { Typography } from 'antd'

const { Title } = Typography

export const StudentsTable: FC<StudentsTableProps> = ({ students }) => {
  return (
    <>
      {students.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Legajo</th>
                <th>Nombre</th>
                <th>Asistencia</th>
                <th>Puede promocionar?</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <Student {...student} />
              ))}
            </tbody>
          </table>
          <p>La cantidad total de alumnos es: {students.length}</p>
        </>
      ) : (
        <Title level={3}>No se encontraron alumnos para este curso!</Title>
      )}
    </>
  )
}
