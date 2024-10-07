import type { FC } from 'react'
import { StudentsFiltersProps } from '../../types/student.types'
import '../../styles/students.css'
import { Button, Col, Input, Row } from 'antd'
import { Typography } from 'antd'

const { Title } = Typography

export const StudentsFilters: FC<StudentsFiltersProps> = ({ isFiltered, setIsFiltered, searchText, setSearchText }) => {
  const onFilterClick = () => {
    setIsFiltered((prevValue) => !prevValue)
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Title level={3}>Filtros</Title>
        </Col>
        <Col className="gutter-row" span={6}>
          <Button onClick={onFilterClick}>{isFiltered ? 'Quitar filtro' : 'Filtrar'} alumnos libres</Button>
        </Col>
        <Col className="gutter-row" span={6}>
          <Input placeholder="Ingrese nombre/apellido a buscar" value={searchText} onChange={handleInputChange} />
        </Col>
      </Row>
    </div>
  )
}
