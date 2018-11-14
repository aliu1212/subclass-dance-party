// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  let blinkStep = this.step.bind(this);
  setTimeout(blinkStep, this.timeBetweenSteps);  
};

makeDancer.prototype.setPosition = function(top, left) {
  let styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  // let styleSettings1 = {
  //   top: 50%
  // };
  // this.$node.css(styleSettings1);
  this.setPosition(700, this.left);
};
