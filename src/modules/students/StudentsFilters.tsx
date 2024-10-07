import type {FC} from 'react'
import { StudentsFiltersProps } from '../../types/student.types'
import '../../styles/students.css'

export const StudentsFilters: FC<StudentsFiltersProps> = ({isFiltered, setIsFiltered, searchText, setSearchText}) => {
  const onFilterClick = () => {
    setIsFiltered(prevValue => !prevValue)
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => { 
    setSearchText(e.target.value)
  }

  return (
    <div className='students-filters'>
        <h3>Filtros</h3>

        <button onClick={onFilterClick}>{isFiltered ? 'Quitar filtro' : 'Filtrar'} alumnos libres</button>
        <input type="text" value={searchText} onChange={handleInputChange} placeholder='Ingrese nombre/apellido a buscar'/>
    </div>
  )
}

