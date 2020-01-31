import React from "react";
import "./App.css";
import Footer from './Footer.js';
import MovieRow from './MovieRow.js'
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  performSearch(searchTerm) {
    const urlString =
        "https://api.themoviedb.org/3/search/movie?&api_key=da17eed40cc1258d79d206c8a72880dc&language=en-US&page=1&include_adult=false&query=" +
        searchTerm + "&page=";
    $.ajax({
        url: urlString+"1",
        method: "GET"
    }).done(function(response) {
        const results = response.results;
        const rows=[];
        for(let i=0; i<results.length; i++) {
          let movie = results[i];
          let mRow = <MovieRow movie={movie}/>;
          rows.push(mRow);
        }
        this.setState({movies: rows});
        console.log(this.state);
    }.bind(this)).fail(function() {
        console.log("error")
    });
}

  searchChangeHandler(event) {
    this.performSearch(event.target.value);
  }

  render() {
    return (

      <div className="App">

        <table className="titleBar ">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt-64.png" />
              </td>
             
              <td>
                <h3 className="heading">MoviesDB Search</h3>
              </td>
            </tr>
          </tbody> 
        </table>
        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "98%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          placeholder="Enter search term"
          onChange={ this.searchChangeHandler.bind(this) }
        />
        <Footer/>
      </div>
    );
  }
}

export default App;

