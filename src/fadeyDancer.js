var makeFadeyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeFadeyDancer.prototype = Object.create(makeDancer.prototype);
makeFadeyDancer.prototype.constructor = makeFadeyDancer;

makeFadeyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.fadeToggle();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};