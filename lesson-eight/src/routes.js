import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { renderRoutes } from 'react-router-config';
//import { AuthLayout } from './components/layouts/auth';
//import { MainLayout } from './components/layouts/main';

const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomePage
      },
      {
        path: "/about",
        exact: true,
        component: About
      },
      {
        path: "/contacts",
        exact: true,
        component: Contacts
      },
    
    
    ]
  }
];