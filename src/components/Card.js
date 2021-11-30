import React from 'react';
import movie_image from '../assets/movie_image.jpg'

import '../style/Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: this.props
        }
    }     
        
    
    render() {
    return (
        
        <>  
        <div class="card-local">
            <img src={movie_image} className="movie-Card" alt="image_movie"/>
            <div class="card-body">
                <h5 class="card-title">{this.state.movie.title}</h5>
                <p class="card-text">Category : {this.state.movie.category}</p>
                <div className="card-action">
                    <progress max="100" value={this.state.movie.likes/(this.state.movie.likes+this.state.movie.dislikes)*100}></progress>
                    <span className="margin_progress">{(this.state.movie.likes/(this.state.movie.likes+this.state.movie.dislikes)*100).toFixed(0)}%</span>
                
                </div>
                
            </div>
        </div> 
            {/* <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image movie-Card">
                    <img src={movie_image} alt="image_movie"/>
                    <span className="card-title">{this.state.movie.title}</span>
                    </div>
                    <div className="card-content card-content-supp">
                    Category : {this.state.movie.category}
                    </div>
                    <div className="card-action">
                        <progress max="100" value={this.state.movie.likes/(this.state.movie.likes+this.state.movie.dislikes)*100}></progress>
                        <span className="margin_progress">{(this.state.movie.likes/(this.state.movie.likes+this.state.movie.dislikes)*100).toFixed(0)}%</span>
                    
                    </div>
                </div>
                </div>
            </div>              */}
        </>
        
      
    )  
    }  
   


}

export default Card;
