import pkg from '../../../package.json'

export const Home = () => 
(<>
    <h1>Hola clase de Programación III</h1>
    <h2>Home</h2>
    <p>AppName: {pkg.name}</p>
    <p>Version: {pkg.version}</p>
</>)
