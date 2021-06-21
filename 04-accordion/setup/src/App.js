import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';



function App() {
  const[records, setrecords] = useState(data)


  return (
   
    <main>
    <div className="container">
      <h3>
        Question and Answer about login
      </h3>
      <section className="info">
        {records.map((item)=>{
          return <SingleQuestion key={item.key} {...item}/>
        })}
      </section>
    </div>
 </main>
   
  )

}

export default App;
