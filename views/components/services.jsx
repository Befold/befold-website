const React = require('react');

module.exports = function () {
  return (
    <section className="content-section content-section--services">
      <div className="grid-row">
        <div className="grid-col-12-small">
          <h2>Services</h2>
        </div>
      </div>

      <div className="grid-row">
        <div className="grid-col-6-small grid-col-3-medium">
          <img src="/public/images/lightning.svg" alt="" />

          <h3>Rapid Prototyping</h3>

          <p>Build your proof of concept quickly. We'll help you define your MVP, and get your idea off the ground.</p>
        </div>

        <div className="grid-col-6-small grid-col-3-medium">
          <img src="/public/images/cogs.svg" alt="" />

          <h3>Product Design and Development</h3>

          <p>Put our smarts to good use. We love problem solving and delivering software.</p>
        </div>

        <div className="grid-col-6-small grid-col-3-medium">
          <img src="/public/images/code.svg" alt="" />

          <h3>Engineering as a Service</h3>

          <p>Need extra capacity? Many hands make light work, and Befold has extra hands.</p>
        </div>

        <div className="grid-col-6-small grid-col-3-medium">
          <img src="/public/images/puzzle.svg" alt="" />

          <h3>Guidance and Mentoring</h3>

          <p>Improve development velocity, something something blah blah.</p>
        </div>
      </div>
    </section>
  );
}
