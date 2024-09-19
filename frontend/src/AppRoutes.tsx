import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout.tsx';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout>Home PAGE</Layout>} />
        <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
