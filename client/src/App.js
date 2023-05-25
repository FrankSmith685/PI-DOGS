import { Routes, Route } from 'react-router-dom';
import LadingPage from './components/LadingPage';

import NotFound from './components/NotFound';
import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import { CreateDogs } from './components/CreateDogs';
import About from './components/About';
import DetailDogs from './components/DetailDogs';
// import { CreateDogs } from './components/CreateDogs';
const HomePage = lazy(()=>import ('./components/Home'));
// const About = lazy(()=>import ('./components/About'));
// const CreateDogs = lazy(()=>import('.components/CreateDogs'))



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LadingPage />} />
      <Route path="/home" element={
        <Suspense fallback={<div>Cargando...</div>}>
          <NavBar/>
          <HomePage />
        </Suspense>
      } />
      {/* <Route path="/CreateDogs" element={
        <Suspense fallback={<div>Cargando...</div>}>
          <NavBar/> */}
          {/* <CreateDogs /> */}
        {/* </Suspense>
        
      } /> */}
      <Route path="/home/:id" element={<DetailDogs />} />
      <Route path="/CreateDogs" element={<CreateDogs />} />
      <Route path="/About" element={<About />} />

      {/* <Route path="/About" element={
        <Suspense fallback={<div>Cargando...</div>}>
          <NavBar/>
          <About />
        </Suspense>
        } /> */}
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}