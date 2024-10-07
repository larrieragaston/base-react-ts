import pkg from '../../../package.json'
import { Typography } from 'antd'

const { Title } = Typography

export const About = () => (
  <>
    <Title level={2}>About</Title>
    <p>AppName: {pkg.name}</p>
    <p>Version: {pkg.version}</p>
  </>
)
