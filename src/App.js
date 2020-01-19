import React from "react";
import "./App.css";
import Footer from './Footer.js'
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  performSearch(searchTerm) {
    var data = []
    const urlString =
        "https://api.themoviedb.org/3/search/movie?&api_key=da17eed40cc1258d79d206c8a72880dc&language=en-US&page=1&include_adult=false&query=" +
        searchTerm + "&page=";
    $.ajax({
        url: urlString+"1",
        method: "GET"
    }).done(function(response) {
        data = data.concat(response.results)
        if(response.total_pages>1) {
          for(let i=2; i<=response.total_pages; i++) {
            $.ajax({
              url: urlString+i,
              method: "GET"
            }).done(function(resp) {
              data = data.concat(resp.results)
              if(i===response.total_pages) {
                console.log(data);
              }
            }).fail(function() {
              console.log("error")
            });
          }
        }
    }).fail(function() {
        console.log("error")
    });
}

  searchChangeHandler(event) {
    console.log('Search query changed');
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
              <td width="8" />
              <td>
                <h3>MoviesDB Search</h3>
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
