import React from 'react'
import { Link } from 'react-router-dom'

function Student() {
  return (

  

    <div>
        <div className='heading'>
            <h1 className='head'>STUDENT DATA</h1>
            <button className='btn1'>ADD➕</button>
            </div>
        <div  className='table'>
        <table border="1">
                  <thead>
                     <tr>
                     <th>Name</th>
                      <th>Age</th>
                      <th>Course</th>
                      <th>Batch</th>
                      <th>Changes</th>
                     </tr>
                  </thead>
            <tbody>
            <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>December</td>
                      <td><Link to={'/edit'}>Edit</Link></td>
                
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>December</td>
                      <td><Link to={'/edit'}>Edit</Link></td>

                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>December</td>
                      <td><Link to={'/edit'}>Edit</Link></td>
                    
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>December</td>
                      <td><Link to={'/edit'}>Edit</Link></td>
                    
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>December</td>
                      <td><Link to={'/edit'}>Edit</Link></td>
                      
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>December</td>
                      <td><Link to={'/edit'}>Edit</Link></td>
                    
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>December</td>
                      <td><Link to={'/edit'}>Edit</Link></td>
                
                  </tr>
            </tbody>
              </table>
        </div>
    </div>
  )
}

export default Student