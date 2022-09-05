import React from 'react';
import axios from 'axios';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    bookArr : []
  }
}

  componentDidMount = () => {
    axios
    .get(`http://localhost:3010/getBooks`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        bookArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    return(
      <div>
        <h1>book System</h1>
        {this.state.bookArr.map(item =>{
          return(
            <div>
              <h3>book name : {item.title} </h3>
              <p>book description : {item.description}</p>
              <h4>book state : {item.state}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
