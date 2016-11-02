const React = require('react');
const DefaultLayout = require('./layouts/default');
const Hero = require('./components/hero');
const WhatIs = require('./components/what-is');
const Services = require('./components/services');
const Footer = require('./components/footer');

class Index extends React.Component {
  render () {
    const layoutProps = {
      title: 'Befold | Digital consultancy with a difference'
    };

    return (
      <DefaultLayout {...layoutProps}>
        <Hero />

        <WhatIs />

        <Services />

        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
