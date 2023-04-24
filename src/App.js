import React from 'react'
import House from './components/House';
// import about from "./pages/about"
// import rentals from "./pages/rentals"
// import signin from "./pages/signin"

function App() {
  return (
  <>
  {/* <Router>
    <switch>
    <Route path='/' exact component={home} />
        <Route path='/about' component={about} />
        <Route path='/rentals' component={rentals} />
        <Route path='/signin' component={signin} />
    </switch>
  </Router> */}
  <House />
  </>
  );
}

export default App;
