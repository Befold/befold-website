const React = require('react');

module.exports = function () {
  return (
    <section className="header">
      <div className="header__inner">
        <div className="grid-row">
          <div className="grid-col-12-small">
            <img src="/public/images/befold-logo-white.svg"
              className="header__logo"
              alt="Befold"/>
          </div>
        </div>
      </div>
    </section>
  )
}
