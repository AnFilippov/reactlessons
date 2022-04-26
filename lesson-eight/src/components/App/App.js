import './App.css';
import { renderRoutes } from 'react-router-config';
import { routes } from '../../routes';
import { Switch } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Main from "../Main";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
 
    <Main/>
    
    <Switch>
    {renderRoutes(routes)}
    </Switch>
    </BrowserRouter>
    
   
    </div>
  );
}

export default App;
