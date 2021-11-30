import React from 'react';
import { movies$ } from './data/movies.js'
import './style/App.css';
import Card from './components/Card'
import Header from './components/Header.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
    movies: [],
    // je fais une autre copie de movies pour l'utiliser dans le filtre
    anotherMovies: []
        
    }
   
  }

  //Chercher les données du fichier movies.js 

  getMovies = () => {
    movies$
    .then((data) => this.setState({movies: data, anotherMovies: data}))
    .catch((error) => {console.log(error)
    })
  }

 
//Fonction qui permet de supprimer une Card au clique
  removeCard = (id) => {
    
    let copyMovies = [...this.state.movies]
    const index = copyMovies.findIndex(movie => movie.id === id)    
    copyMovies.splice(index, 1)    
    this.setState({ movies: copyMovies })           
    
}


//Fonction qui permet de filtrer
clickToFilter = (category) => {

  if (category === "All"){    
    this.setState({movies: this.state.anotherMovies})
  }
  
  if (category === "Comedy"){    
    this.setState({movies: this.state.anotherMovies.filter(elem => elem.category === "Comedy")})
  }
  if (category === "Animation"){
    
    this.setState({movies: this.state.anotherMovies.filter(elem => elem.category === "Animation")})
  }
  if (category === "Drame"){
    this.setState({movies: this.state.anotherMovies.filter(elem => elem.category === "Drame")})
  }
  if (category === "Thriller"){
    this.setState({movies: this.state.anotherMovies.filter(elem => elem.category === "Thriller")})
  }
}
// On appelle la fonction qui récupère les données au montage de la composantes
componentDidMount() {
  this.getMovies()  
}

render() {
  return ( 
    <>  
        {/* <Header />  */}

        <h4 className="Title">Movies React-app</h4>    
        
        <div>
            <center className="button_countainer">
              <button className="filter_button" category="All" onClick={()=>this.clickToFilter("All")}> All movies </button>
              <button className="filter_button" category="Comedy" onClick={()=>this.clickToFilter("Comedy")}> Comedy </button>
              <button className="filter_button" category="Animation" onClick={()=>this.clickToFilter("Animation")}> Animation</button> 
              <button className="filter_button" category="Drame" onClick={()=>this.clickToFilter("Drame")}> Drame </button>
              <button className="filter_button" category="Drame" onClick={()=>this.clickToFilter("Thriller")}> Thriller </button>
            </center>
        </div>
           
        
        <div className="movies-list">
          {this.state.movies.map((item, index) => {
        return(
            <div>
                         
              <Card 
                key={item.id}
                title={item.title}
                category={item.category}
                likes={item.likes}
                dislikes={item.dislikes}
              />
              
              
              <div className="deleteAndLike">
                <span><i onClick={() => this.removeCard(item.id)} className="small material-icons DeleteButton">delete</i></span>
                <div className="likeDislike-position">
                <span className="nbLikes"><i className="small material-icons like">thumb_up</i>{item.likes}</span>              
                <span className="nbLikes"><i className="small material-icons dislike">thumb_down</i>{item.dislikes}</span>        
                </div>
              </div>
            </div>
            )})}
            </div>                 
        
             
    </>    
  )
  }
}
     
    



export default App;
