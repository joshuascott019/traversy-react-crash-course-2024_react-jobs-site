import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
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
