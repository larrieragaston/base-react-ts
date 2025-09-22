import { Link } from 'react-router-dom'
import { SWCharacterProps } from '../types/sw.types'
import { FC } from 'react'

export const SWCharacter: FC<SWCharacterProps> = ({ name, url }) => {
  const id = url.split('/')[5]
  return (
    <li>
      Nombre: {name}
      <Link to={`/sw-characters/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </li>
  )
}
