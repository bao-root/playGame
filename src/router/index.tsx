import App from '../App';
import Login from '../page/Login';
import Refistered from '../page/Registered';
import {
  Other,
  Snake
} from '../games';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/snake' element={<Snake />}></Route>
        <Route path='/other' element={<Other />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Refistered />}></Route>
    </Routes>
  </Router>
)

export default BaseRouter;