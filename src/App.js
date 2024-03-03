

import './App.css';
import TopNav from './Components/TopNav';
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import VerticalNavbar from './Components/VerticalNavbar';
import HorizontalMenu from './Components/HorizontalMenu';
import Home from './Components/Home';
import Songs from './Components/Songs';
import MotivationVideo from './Components/MotivationVideo';
function App() {
  return (

    <>
    
      
   <BrowserRouter>
    <TopNav></TopNav>
    <Routes>
      <Route path='/services'></Route>
      <Route path='/all'></Route>
    </Routes>
    </BrowserRouter>
    <div className='row'>
      <div className='col-sm-2'>
      <VerticalNavbar></VerticalNavbar>
      </div>
   <div className='col-sm-10'>
    <BrowserRouter>
   <HorizontalMenu></HorizontalMenu>
   <div className='mainComponentScroll'>
<Routes>   
  
  

<Route path='' element={<Home></Home>}></Route>
  <Route path='/songs' element={<Songs></Songs>}></Route>
  <Route path='/Motivation' element={<MotivationVideo></MotivationVideo>}></Route>


</Routes>
</div>
   </BrowserRouter>
   <br></br>


   </div>
    
    </div>
 
        
 
    </>
  )
  

}

export default App;
