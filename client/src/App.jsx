import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Items from './pages/Items';
import ItemDetail from './pages/ItemDetail';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import './styles/base.css';
import './styles/theme.css';
import './styles/animations.css';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home is the default at "/" */}
        <Route index element={<Home />} />
        {/* Items at "/items" */}
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<ItemDetail />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}