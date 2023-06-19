import {Route, Switch} from 'react-router-dom'
import EbankLogIn from './components/EbankLogIn'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={EbankLogIn} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
