import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
    const routes = [
        {
            path: '/',
            component: MainPage,
        },
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
