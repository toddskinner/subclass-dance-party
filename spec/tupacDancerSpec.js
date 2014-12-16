describe("tupacDancer", function() {

  var tupacDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tupacDancer = new makeTupacDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(tupacDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(tupacDancer.$node, 'toggle');
    tupacDancer.step();
    expect(tupacDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(tupacDancer, "step");
      expect(tupacDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(tupacDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(tupacDancer.step.callCount).to.be.equal(2);
    });
  });
});


