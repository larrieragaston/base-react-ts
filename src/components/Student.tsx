import type { FC } from 'react'
import { StudentProps } from '../types/student.types'
import { Button } from 'antd'

export const Student: FC<StudentProps> = ({ idNumber, name, attendance, can_promote }) => (
  <tr key={idNumber}>
    <td>{idNumber}</td>
    <td>{name}</td>
    <td>{attendance}</td>
    <td>{can_promote}</td>
    <td>
      <Button onClick={() => alert(`Aqui se debería editar el alumno ${idNumber}`)}>Editar</Button>
      <Button onClick={() => alert(`Aqui se debería borrar el alumno ${idNumber}`)}>Borrar</Button>
    </td>
  </tr>
)
