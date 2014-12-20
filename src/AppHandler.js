var React = require('react');
var ChildComponent = require('./ChildComponent');
var di = require('di');

var AppHandler = function(ChildComponent) {
  return React.createClass({
    render() {
      return (
        <div>
          <h1>Hello world!</h1>
          <ChildComponent />
        </div>
      );
    }
  });
}

di.annotate(AppHandler, new di.Inject(ChildComponent));

module.exports = AppHandler;