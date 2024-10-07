import { FC, useEffect, useState } from 'react'
import { swService } from '../../services/swapi'
import { Link } from 'react-router-dom'
import { SWCharacterProps } from '../../types/sw.types'
import { Spin, Typography, Button, Table, TableProps } from 'antd'
import { content } from '../../utils/content'

const { Title } = Typography

const columns: TableProps<SWCharacterProps>['columns'] = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Genero',
    dataIndex: 'gender',
    key: 'gender',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Fecha Nac.',
    dataIndex: 'birth_year',
    key: 'birth_year',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, record) => {
      const id = record.url.split('/')[5]
      return (
        <Link to={`/sw-characters/${id}`}>
          <Button>Ver detalle</Button>
        </Link>
      )
    },
  },
]

export const SWCharacters: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState<Array<SWCharacterProps>>([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await swService.getPeople()
      console.log(response)
      setCharacters(response.results)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <Title level={2}>Listado de personajes de Star Wars</Title>
      {isLoading ? (
        <Spin tip="Cargando listado de personajes de SW..." size="large">
          {content}
        </Spin>
      ) : (
        <Table<SWCharacterProps> columns={columns} dataSource={characters} />
      )}
    </>
  )
}
