import type {FC} from "react"

type StudentAttendance = "Regular" | "Libre"
type StudentCanPromote = "S" | "N"

export interface StudentData {
  idNumber: number,
  name: string,
  attendance:  StudentAttendance,
  can_promote: StudentCanPromote
}

export const Student: FC<StudentData> = ({idNumber, name, attendance}) => (
    <li key={idNumber}>Nombre: {name}, Condición: {attendance}</li>
  )

