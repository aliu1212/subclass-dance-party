$(document).ready(function() {
  window.dancers = [];

  $('.lineUpButton').on('click', function(event) {
    let diff = 100 / window.dancers.length;
    let pos = 0 - diff;
    for (let i = 0; i < window.dancers.length; i++) {
      pos += diff;
      let space = '' + pos + '%';
      window.dancers[i].$node.animate({left: space, top: '50%'});
    }
    // console.log(window.dancers);
    // ${'.dancer2'}.remove();
  });

  $('.closestDancerButton').on('click', function(event) {
    let closeDist = 100000000;
    let closest = [];

    for (let i = 0; i < window.dancers.length-1; i++) {
      for (let j = i + 1; j < window.dancers.length; j++) {
        let xdiff = window.dancers[i].left - window.dancers[j].left;
        let ydiff = window.dancers[i].top - window.dancers[j].top;
        let currentDist = Math.sqrt((xdiff)^2 + (ydiff)^2);
        if (currentDist < closeDist) {
          closeDist = currentDist;
          closest = [window.dancers[i], window.dancers[j]];
        }
        
      }     
    }
  
    closest[0].$node.animate({left: '45%', top: '50%'});
    closest[1].$node.animate({left: '55%', top: '50%'});
    console.log("distance", closeDist);
    console.log("close pair", closest);

  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one 
     * small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

