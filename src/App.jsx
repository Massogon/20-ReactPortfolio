import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <Layout>
      <Outlet /> {/* This will render the corresponding component based on the route */}
    </Layout>
  );
}
