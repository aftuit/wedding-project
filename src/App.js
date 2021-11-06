import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import Preorder from './pages/Preorder/Preorder'
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
    <BrowserRouter >
      <Switch>
        {
          routes.map(route => <Route key={route.path} path={route.path} component={route.component} exact />)
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
