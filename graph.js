// var graph = document.getElementById('graph');

var graph = $("#graph");

s_history = [0,0,0,0,0,0,0]

// if ((JSON.parse(localStorage.current_user).smoking_history).length != 0) {
// 	for (i in JSON.parse(localStorage.current_user).smoking_history) {
// 		s_history[i] = JSON.parse(localStorage.current_user).smoking_history[i]
// 		if (i >= 7) {
// 			break;
// 		}
// 	}
// };


Plotly.plot( graph, [{
    x: [1, 2, 3, 4, 5, 6, 7],
    y:  [0,0,0,0,0,0,0]}], { 
    margin: { t: 0 } } ); 

// function show_graph() {
// 	Plotly.plot( graph, [{
//     x: [1, 2, 3, 4, 5, 6, 7],
//     y:  [0,0,0,0,0,0,0]}], { 
//     margin: { t: 0 } } ); 
// };

/* Current Plotly.js version */
console.log( Plotly.BUILD );