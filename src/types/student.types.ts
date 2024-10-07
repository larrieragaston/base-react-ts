type StudentAttendance = 'Regular' | 'Libre'
type StudentCanPromote = 'S' | 'N'

export interface StudentProps {
  idNumber: number
  name: string
  attendance: StudentAttendance
  can_promote: StudentCanPromote
}

export interface StudentsFiltersProps {
  isFiltered: boolean
  setIsFiltered: (isFiltered: boolean | ((prevValue: boolean) => boolean)) => void
  searchText: string
  setSearchText: (searchText: string) => void
}

export interface StudentsTableProps {
  students: Array<StudentProps>
}
