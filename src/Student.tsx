import type {FC} from "react"

type StudentAttendance = "Regular" | "Libre"
type StudentCanPromote = "S" | "N"

export interface StudentProps {
  idNumber: number,
  name: string,
  attendance:  StudentAttendance,
  can_promote: StudentCanPromote
}

export const Student: FC<StudentProps> = ({idNumber, name, attendance, can_promote}) => (
  <tr key={idNumber}>
    <td>{idNumber}</td>
    <td>{name}</td>
    <td>{attendance}</td>
    <td>{can_promote}</td>
    <td>
      <button onClick={() => alert(`Aqui se debería editar el alumno ${idNumber}`)}>Editar</button>
      <button onClick={() => alert(`Aqui se debería borrar el alumno ${idNumber}`)}>Borrar</button>
    </td>
  </tr>
)
