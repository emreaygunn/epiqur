import React, { Component } from "react";
import axios from "axios";
 
class People extends Component {

  state = {
    persons : [],
    items: [],
  };

  componentDidMount(){
    axios.get('https://swapi.co/api/people/').then((res) => {
      //console.log(res.data.results);
      this.setState({ persons : res.data.results })
    })
    .catch(error=>{    
    });
  }

  listPersons()
  {
    var i , j ;
    let items = this.state.items;
    let persons = this.state.persons;

    for(i = 0 ; i< persons.length ; i++){
      console.log(persons[i]);
    }

     for(i=0 ; i <persons.length ; i++)
     {        
       let a = persons[i].mass;

       for(j=i+1 ; j <= persons.length-1 ; j++)
       {
         let b = persons[j].mass;
         if(a<b)
         {
           items=persons[i];
           persons[i]=persons[j];
           persons[j]=items;
         }
         
       }
     }

    return(
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <form>
      {this.listPersons()}
      </form>      
    );
  }
}
 
export default People;