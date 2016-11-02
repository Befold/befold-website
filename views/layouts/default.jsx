const React = require('react');
const Header = require('../components/header');
const headIncludes = require('../partials/head-includes');

class DefaultLayout extends React.Component {
  getTitle() {
    return this.props.title || 'eventrocket';
  }

  render() {
    return (
      <html>
        <head>
          <title>{this.getTitle()}</title>

          {headIncludes.map(sheet => sheet)}
        </head>

        <body>
          <div className="container">
            <Header />

            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
