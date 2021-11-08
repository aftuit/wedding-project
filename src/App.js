import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import Preorder from './pages/Preorder/Preorder';
import Footer from "./components/Footer/Footer.js";
import './App.scss'

function App() {

  const routes = [
    {
      path: "/",
      component: MainPage
    },
    {
      path: "/preorder",
      component: Preorder
    }
  ]

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact
                        />
                    ))}
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
