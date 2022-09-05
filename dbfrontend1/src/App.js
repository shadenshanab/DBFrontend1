import React from 'react';
import axios from 'axios';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    catArr : []
  }
}

  componentDidMount = () => {
    axios
    .get(`http://localhost:3010/getCats`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        catArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    return(
      <div>
        <h1>Cat System</h1>
        {this.state.catArr.map(item =>{
          return(
            <div>
              <h3>cat name : {item.name} </h3>
              <p>cat breed : {item.breed}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
