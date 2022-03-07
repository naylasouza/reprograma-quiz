import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'


const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path='/' ><Home /></Route>
        <Route path='/Login' ><Login/></Route>
      </Switch>
    </Router>

  )
}
export default Routes