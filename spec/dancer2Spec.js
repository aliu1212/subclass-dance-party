describe('snoop', function() {
  var snoop, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    snoop = new makeDancer2(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(snoop.$node).to.be.an.instanceof(jQuery);
  });

  it('should should have an image', function() {

    //expect(snoop.$node.attr('src').to.be.("https://mbtskoudsalg.com/images/dancer-transparent-animated-gif-4.gif");
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(snoop, 'step');
      expect(snoop.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(snoop.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(snoop.step.callCount).to.be.equal(2);
    });
  });
});
