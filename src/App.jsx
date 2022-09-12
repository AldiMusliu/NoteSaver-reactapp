import './assets/sass/App.scss'
import { routeData } from './lib/Routes/RouteData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './lib/Routes/PrivateRoutes'
import PublicRoutes from './lib/Routes/PublicRoutes'
import Header from './partials/Header'
import Footer from './partials/Footer'

function App() {
  return (
        <div className="App">
          <BrowserRouter>
              <Header/>
                <div className="App-content">
                  <Routes>
                    {routeData.public.map((elem, index) => (
                      <Route key={index} path={elem.path} element={<PublicRoutes>{elem.element}</PublicRoutes>} />
                    ))}
                    {routeData.user.map((elem, index) => (
                      <Route key={index} path={elem.path} element={<PrivateRoutes role="USER">{elem.element}</PrivateRoutes>} />
                    ))}
                    {routeData.exposed.map((elem, index) => (
                      <Route key={index} path={elem.path} element={elem.element} />
                    ))}
                    
                  </Routes>
                  </div>
                <Footer/>
            </BrowserRouter>
        </div>
  )
}

export default App