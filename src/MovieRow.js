import React from 'react';
import ReactDOM from 'react-dom';

class MovieRow extends React.Component {
  render() {
    return(
		<table>
			<tr>
				<th> Movie Poster </th>
				<th> Details </th>
			</tr>
			<tr>
				<td> [POSTER] </td>
				<td>
					<table>
						<tr>
							<th> Movie Name </th>
						</tr>
						<tr>
							<td> [MOVIE NAME HERE] </td>
						</tr>
						<tr>
							<th> Movie Description </th>
						</tr>
						<tr>
							<td> [DESCRIPTION] </td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	)
  }
}

ReactDOM.render(<MovieRow />, document.getElementById('MovieRow'));