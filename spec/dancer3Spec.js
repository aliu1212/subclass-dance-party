describe('Carlton', function() {
  var Carlton, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    Carlton = new makeCarlton(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(Carlton.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(makeCarlton.$node, 'toggle');
  //   makeCarlton.step();
  //   expect(makeCarlton.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(Carlton, 'step');
      expect(Carlton.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(Carlton.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(Carlton.step.callCount).to.be.equal(2);
    });
  });
});
