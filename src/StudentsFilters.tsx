import type {FC} from 'react'

interface StudentsFiltersProps {
  isFiltered: boolean;
  setIsFiltered: (isFiltered: boolean | ((prevValue: any) => boolean)) => void;
  searchText: string;
  setSearchText: (searchText: string) => void
}

export const StudentsFilters: FC<StudentsFiltersProps> = ({isFiltered, setIsFiltered, searchText, setSearchText}) => {
  const onFilterClick = () => {
    setIsFiltered(prevValue => !prevValue)
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => { 
    setSearchText(e.target.value)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <h3>Filtros</h3>

        <button onClick={onFilterClick}>{isFiltered ? 'Quitar filtro' : 'Filtrar'} alumnos libres</button>
        <input type="text" value={searchText} onChange={handleInputChange} placeholder='Ingrese nombre/apellido a buscar'/>
    </div>
  )
}

