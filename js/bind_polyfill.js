Function.prototype.bind = Function.prototype.bind || function (target) {
  var self = this;
  console.log('bind_polyfill::Line3:Values:args' + args);
  return function (args) {
    if (!(args instanceof Array)) {
      args = [args];
    }
    self.apply(target, args);
  };
};
