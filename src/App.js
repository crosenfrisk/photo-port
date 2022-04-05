import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    // React.createElement("div", {}, [
      // React.createElement("h1", {}, "Ginger"),
      // React.createElement("p"), {}, "breed: Brittany Spaniel"
   // ])
   <div>
     <Nav></Nav>
     <main>
      <About></About>
     </main>
  </div>
  );
}

export default App;
