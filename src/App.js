import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '박성덕',
    'birthday': '010401',
    'gender': '여자',
    'job': '초등학생'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '저런',
    'birthday': '990612',
    'gender': '남자',
    'job': '중학생'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '그런',
    'birthday': '960612',
    'gender': '여자',
    'job': '고등학생'
  }
]

class App extends Component {
  render() {
   return (
     <div>     
        { customers.map(c =>{ return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} job={c.job} /> ) }) }
     </div>

   );
 }
}
export default App;
