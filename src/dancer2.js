// this is snoop

var makeDancer2 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<button class="dancer2"></button>');
  this.setPosition(top, left);
};

makeDancer2.prototype = Object.create(makeDancer.prototype);
makeDancer2.prototype.constructor = makeDancer2;

// makeDancer2.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.fadeIn();
//   this.$node.fadeOut();
// };