
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import News from './component/News';
import React, { useState } from 'react';


export default function App() {

  let [pro,setPro]=useState(0);
  
  let setProgress=(x)=>{
    setPro(x)
  }
  let size=12

    
    return (
      <div>
        <Router>
        <LoadingBar
          color='#f11946'
          progress={pro}
          onLoaderFinished={() => setPro(0)}
        />
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News  setProgress={setProgress}  key="home" size={size} category={'general'} country={'in'}/>}/>
            <Route exact path='/Business' element={<News  setProgress={setProgress} key="business" size={size} category={'business'} country={'in'}/>}/>
            <Route exact path='/Entertainment' element={<News  setProgress={setProgress} key="entertainment" size={size} category={'entertainment'} country={'in'}/>}/>
            <Route exact path='/General'  element={<News  setProgress={setProgress} key="general" size={size} category={'general'} country={'in'}/>}/>
            <Route exact path='/Health'  element={<News  setProgress={setProgress} key="health" size={size} category={'health'} country={'in'}/>}/>
            <Route exact path='/Science'  element={<News  setProgress={setProgress} key="science" size={size} category={'science'} country={'in'}/>}/>
            <Route exact path='/Sports'  element={<News  setProgress={setProgress} key="sports" size={size} category={'sports'} country={'in'}/>}/>
            <Route exact path='/Technology'  element={<News  setProgress={setProgress} key="technology" size={size} category={'technology'} country={'in'}/>}/>
          </Routes>

        </Router>
        
        
        
      </div>
    )
  }


