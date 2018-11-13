var makeDancer3 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer3"></span>');
};

makeDancer3.prototype = Object.create(makeDancer.prototype);
makeDancer3.prototype.constructor = makeDancer3;

makeDancer3.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideDown();
  this.$node.slideUp();
};