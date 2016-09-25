const React = require('react')

const Header = require('./Header')

module.exports = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div>hydra app</div>
      </div>
    )
  }
})
