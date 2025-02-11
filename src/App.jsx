import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// components
import Header from './components/header'
import Footer from './components/footer'
import PageTransition from './components/PageTransition'
// pages
import Home from './pages/home/home'
import About from './pages/about/about'
import Management from './pages/management/management'
import Contactus from './pages/contactus/contactus'
import CoreStrength from './pages/services/core-strength/core-strength'
import PPP from './pages/services/ppp/ppp'

// Layout component to avoid repetition
const Layout = ({ children }) => (
  <>
    <PageTransition>
      <Header />{children}
      <Footer />
    </PageTransition>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/management",
    element: <Layout><Management /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contactus /></Layout>,
  },
  {
    path: "/core-strengths",
    element: <Layout><CoreStrength /></Layout>,
  },
  {
    path: "/ppp",
    element: <Layout><PPP /></Layout>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
