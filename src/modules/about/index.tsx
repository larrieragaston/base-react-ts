import pkg from '../../../package.json'

export const About = () => (
  <>
    <h1>Hola clase de Programación III</h1>
    <h2>About</h2>
    <p>AppName: {pkg.name}</p>
    <p>Version: {pkg.version}</p>
  </>
)
