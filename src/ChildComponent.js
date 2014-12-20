var React = require('react');
var di = require('di');
var AppActions = require('./AppActions');

var ChildComponent = function(AppActions) {
  return React.createClass({
    handleClick() {
      AppActions.alertInExcitement();
    },
    render() {
      return (
        <div onClick={this.handleClick}>I am a child component. Click me!</div>
      );
    }
  });
}
di.annotate(ChildComponent, new di.Inject(AppActions));
module.exports = ChildComponent;