import React from 'react';
import "./App.css";
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
            <p className="copy">&copy;2020 OpenCode</p>
            <ul className="social-icons">
              <li><SocialIcon url="https://twitter.com/teamopencode" /></li>
              <li><SocialIcon url="https://facebook.com/opencodeiiita" /></li>
              <li><SocialIcon url="https://github.com/opencodeiiita" /></li>
              <li><SocialIcon url="https://opencodeiiita.netlify.com/" /></li>
            </ul>
        </div>
    );
  }
}
