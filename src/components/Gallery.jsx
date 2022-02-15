import { Component} from "react"

class MovieGallery extends Component {
    state = {
        movies: [],
    }
   componentDidMount = async () => {
       try {
           let response = await fetch("http://www.omdbapi.com/?apikey=a0d093ea&s=harry%20potter"
        );
        if (response.ok){
            let data = response.json();
            this.setState({ movies: data})
        }else{
            alert("something wrong with the data")
        }

       } catch (error) {
           console.log(error)
       }
   }
   render() {
       return <div>
         {this.state.movies[0,1,2,3,4,5,7,8,9].map((movie) => movie )}
       </div>
    
   }

    }

export default  MovieGallery 