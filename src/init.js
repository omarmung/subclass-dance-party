$(document).ready(function() {
  window.dancers = [];

  var pressed = false;
  var timerId = 0;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dotMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dotMakerFunction = window[dotMakerFunctionName];
    // make a dancer with a random position

    var hirstDots = ['12133D', '160603', 'DDCFAE', '151939', 'C9C6C1', 'BEB235', 
                      'B62A2D', 'A62820', '3B1214', 'EBD8B8', '3F676B', 'AE2A20', 
                      '798FA8', 'D7BF8F', 'A1672A', 'BB2E2E', 'DDD8D2', 'D3384E',
                      '9986C4', 'DA5038', '161840', 'E4C8B5', 'E85FF3', 'BB882A',
                      '272D69', '000000', 'EBAB34', 'E8C73C', '000406'];

    var numToColor = function(num) {

      return hirstDots[num];
    };

    var numToHeight = function(num) {
      var numRows = 7;
      var rows = [0.03];
      var heights = function(numRows) {
        for (i = 1; i < numRows - 1; i++) {
          rows.push(0.03 + 0.94 / (numRows - 1 ) * i);
        }
        rows.push(0.97);
      };
      heights(numRows);
      return rows[num];
    };

    var numToWidth = function(num) {
      var numColumns = 12;
      var columns = [0.03];
      var widths = function(numRows) {
        for (i = 1; i < numRows - 1; i++) {
          columns.push(0.03 + 0.94 / (numRows - 1 ) * i);
        }
        columns.push(0.97);
      };
      widths(numColumns);
      return columns[num];
    };

    var newDot = function() {

      var dot = new dotMakerFunction(
        $("body").height() * numToHeight(Math.floor(Math.random() * 7)),
        $("body").width() * numToWidth(Math.floor(Math.random() * 12)),
        numToColor(Math.floor(Math.random() * hirstDots.length))
        );

      $('body').append(dot.$node);
    };
    if (!pressed) {
      $('.addDancerButton').text('Stop');
      newDot();
      timerId = setInterval(newDot, 50);
    } else {
      $('.addDancerButton').text('Start');
      clearInterval(timerId);
    }

    if (pressed) {
      pressed = false;
    } else {
      pressed = true;
    }

  });
});

