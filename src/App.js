import React from 'react';
import { Route,Routes,Switch,Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome.js'
import Products from './pages/Products.js'
import ProductDetails from './pages/ProductDetails.js'
import MainHeader from './components/MainHeader.js';
function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Switch>
        <Routes>
        <Route  path='/' exact >
        <Redirect to='/welcome'/>
        </Route>

          <Route path="/welcome" component={Welcome}/>
           <Route  path="/products" component={Products}/>
            <Route path="/productsdetails/:productId" component={ProductDetails}/>
           
        </Routes>
        </Switch>
      </main>
    </div>
  );
}

export default App;
