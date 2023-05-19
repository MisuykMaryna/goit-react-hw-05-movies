import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {Header} from 'components/Header/Header.jsx'


 const Layout = () => {
    return (
         <>
      <Header/ >
      <main>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
};
    
export default Layout;