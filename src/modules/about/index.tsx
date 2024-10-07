import pkg from '../../../package.json'

export const About = () => (
  <>
    <h2>About</h2>
    <p>AppName: {pkg.name}</p>
    <p>Version: {pkg.version}</p>
  </>
)
