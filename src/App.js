import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store} >
    <div className="App">

     <ItemContainer cake/>   {/*  we pass cake so that it take props as cake and show numberofcakes*/ }
      <ItemContainer/>
     <CakeContainer />
     {/* <HooksCakeContainer /> */}
     <IceCreamContainer/>
     <NewCakeContainer/>
     
     <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
