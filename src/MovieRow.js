import React from "react";
import ReactDOM from "react-dom";

class MovieRow extends React.Component {
  render() {
    if (this.props.movies.length!=0){
    for (let i=0; i<this.props.movies.length;i++){
      let backPath = (this.props.movies)[i].props.movie.poster_path;
      if ( backPath==null ) {
        (this.props.movies)[i].props.movie.poster_path  = "https://cdn2.iconfinder.com/data/icons/creative-icons-2/64/ACTION-512.png";
      } 
      else {
        let forwardPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"; 
        let path = forwardPath + backPath;
        (this.props.movies)[i].props.movie.poster_path=path;
      }
    }
    var openMoviePage = (event) => {
      let id = event.target.dataset.id;
      let title = event.target.dataset.title;
      let fullUrl = "https://www.themoviedb.org/movie/" + id ;
      let titleSplitted = title.split(' ');
      for (let i=0; i<titleSplitted.length; i++){
        fullUrl += "-" + titleSplitted[i];
      }
      fullUrl += "?language=en-US";
      window.open(fullUrl,'_blank');
    }
    return (
      <center>
      <table  style={{
        color:"white",
        tableLayout: "fixed",
        margin: "2em",
        borderCollapse: "collapse"
      }}>
        <tbody>
        <tr>
          <th> <h1> Movie Poster </h1> </th>
          <th> <h1> Details </h1></th>
        </tr> 
        {(this.props.movies).map((movie) => 
          <tr style={{border: "solid",
            borderWidth: "2px 0"}}>
          <td style = {{padding : "1em"}}> <img src={movie.props.movie.poster_path} alt="images.jpg" height="200px" width="200px"></img>  </td> <center>
          <td>
            <table style={{ width:"800px"}}><tbody>
              <tr>
                <th style = {{color : "#167780"}}> Movie Name </th>
              </tr>
              <tr>
                <td style = {{padding : "1em"}}> <center> {movie.props.movie.title} </center> </td>
              </tr>
              <tr>
                <th style = {{color : "#167780"}}> Movie Description </th>
              </tr>
              <tr>
                <td style = {{padding : "1em"}}> <center> {movie.props.movie.overview} </center> </td>
              </tr> </tbody>
            </table>
          </td>  <td> <button data-id = {movie.props.movie.id} data-title ={movie.props.movie.title} onClick={openMoviePage} style={{
            align: "center",
            color: "#167780",
            backgroundColor: "black",
            border : "2px solid",
            borderRadius : "4px",
            fontSize : "1.2em",
            padding:"10px",
            margin:"10px"
          }}> View </button ></td> </center>
        </tr>
        )}
        </tbody>
      </table>
      </center>
    );} else{
      return null;
    }
  }
}

export default MovieRow;
