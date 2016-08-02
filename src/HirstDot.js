var HirstDot = function(top, left, color) {
  this.top = top;
  this.left = left;
  this.color = color;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dot"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.setColor(color);

  this.fade();
};

HirstDot.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  
  this.$node.css(styleSettings);
};

HirstDot.prototype.setColor = function(color) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var color = '#' + color;
  var styleSettings = {
    'border-color': color,
  };
  
  this.$node.css(styleSettings);
};

HirstDot.prototype.fade = function() {

  this.$node.fadeToggle();
};