import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// THE FOLLOWING WAS JUST AN INTRO TO JSX, PLEASE DISREGARD!!!
// import React from 'react';

// const App = () => {
//   const name = 'Joshua';
//   const x = 10;
//   const y = 20;
//   const names = ['Chandler', 'Joey', 'Ross', 'Monica', 'Rachel', 'Phoebe'];
//   const loggedIn = false;
//   const styles = {
//     color: 'red',
//     fontSize: '24px',
//   };

//   return (
//     <>
//       <p style={styles}>Hello {name}</p>
//       <div>
//         The sum of {x} and {y} is {x + y}.
//       </div>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//       {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
//     </>
//   );
// };

// export default App;
