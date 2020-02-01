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
    return (
      <table style={{
        color:"white",
        tableLayout: "fixed"
      }}>
        <tbody>
        <tr>
          <th> Movie Poster </th>
          <th> Details </th>
        </tr> 
        {(this.props.movies).map((movie) => 
          <tr>
          <td> <img src={movie.props.movie.poster_path} alt="images.jpg" height="200px" width="200px"></img>  </td> <center>
          <td>
            <table width="1500"><tbody>
              <tr>
                <th> Movie Name </th>
              </tr>
              <tr>
                <td> <center> {movie.props.movie.title} </center> </td>
              </tr>
              <tr>
                <th> Movie Description </th>
              </tr>
              <tr>
                <td> <center> {movie.props.movie.overview} </center> </td>
              </tr> </tbody>
            </table>
          </td>  <td> <button style={{
            color: "#167780",
            backgroundColor: "black",
            border : "2px solid",
            fontSize : "1.2em",
            padding:"10px",
            margin:"10px"
          }}> View </button ></td> </center>
        </tr>
        )}
        </tbody>
      </table>
    );} else{
      return null;
    }
  }
}

export default MovieRow;
