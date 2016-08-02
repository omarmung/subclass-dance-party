var makeBeatyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeBeatyDancer.prototype = Object.create(makeDancer.prototype);
makeBeatyDancer.prototype.constructor = makeBeatyDancer;

makeBeatyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.slideToggle();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};