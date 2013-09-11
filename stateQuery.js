var state = [];/*Declaring array of states*/
var width = 1;/*Defining width value*/
var stateIndex = 0;
var stateQueryEls;

var baseWidth   = 9;
var goldenRatio = 1.618; /*http://en.wikipedia.org/wiki/Golden_ratio*/
var throttledCalculateState;

var allStates = "state_stitch-narrow state_stitch-normal state_stitch-wide state_toolbar-narrow state_toolbar-normal state_toolbar-wide state_narrower state_narrow state_normal state_wide state_wider state_infinite_width state_infinite_width state_infinite_width";

state[0]="state_stitch-narrow";
state[1]="state_stitch-normal";
state[2]="state_stitch-wide";
state[3]="state_toolbar-narrow";
state[4]="state_toolbar-normal";
state[5]="state_toolbar-wide";
state[6]="state_narrower";
state[7]="state_narrow";
state[8]="state_normal";
state[9]="state_wide";
state[10]="state_wider";
state[11]="state_infinite_width";
state[12]="state_infinite_width";
state[13]="state_infinite_width";

function updateQueryElements(){
	stateQueryEls = $(".stateQuery");
}

function calculateState(){
	stateQueryEls.each(function(index, el){
		var $el = $(el);
		var width = $el.width();
		stateIndex = Math.floor(Math.log(width/baseWidth)/Math.log(goldenRatio) );
		$el.removeClass(allStates);
		$el.addClass(state[stateIndex + 1]);
	});
}

throttledCalculateState = _.throttle(calculateState,200);
throttledupdateQueryElements = _.throttle(updateQueryElements,1000);

$(window).resize(function() {
  throttledupdateQueryElements();
  throttledCalculateState();
});

$(document).ready(function(){
	updateQueryElements();
	calculateState();
});
