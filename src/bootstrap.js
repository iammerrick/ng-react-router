var di = require('di');
var Router = require('./Router');
var React = require('react');

var injector = new di.Injector([]);

var router = injector.get(Router);

router.run((Handler) => {
  React.render(<Handler />, document.body);
});
