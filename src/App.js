import './App.css'
import { useEffect, useState } from 'react';
import ConfigDb from './todo/Container/ConfigDb'
import Footer from "./todo/Components/Footer";
import Header from "./todo/Components/Header";
import Todo from "./todo/Components/Todo";

function App() {

  const [dataJob , setDataJob] = useState([])

    useEffect(() => {
      ConfigDb(setDataJob)
    },[])
  
  return (
    <div className="todoapp">
        <Header setDataJob={setDataJob}/>
        <Todo 
        dataJob={dataJob}
        setDataJob={setDataJob}
        />
        <Footer/>
    </div>
  );
}

export default App;
