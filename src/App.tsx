import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './modules/home'
import { StudentsList } from './modules/students'
import { Contact } from './modules/contact'
import { About } from './modules/about'
import { Layout } from './modules/layout'
import { SWCharacters } from './modules/SWCharacters'
import { SWCharacterDetail } from './modules/characterDetail'

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/sw-characters">
            <Route index element={<SWCharacters />} />
            <Route path=":id" element={<SWCharacterDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
)
