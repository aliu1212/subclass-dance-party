var makeCarlton = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer3"></span>');
  this.setPosition(top, left);
};

makeCarlton.prototype = Object.create(makeDancer.prototype);
makeCarlton.prototype.constructor = makeCarlton;

makeCarlton.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.slideDown();
  // this.$node.slideUp();
};
