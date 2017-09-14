var $ = require('jquery');
var Redux = require('redux');
var indexTemplate = require('../templates/index.hbs');

var INITIAL_STATE = {
  name: '',
  hipsterLevel: 0
};


function puppyReducer( state = INITIAL_STATE, action ) {
  console.log(action);
  // switch (action.type) {
  //   case 'TO_GREEN':
  //     return state.backgroundColor = 'green';
  //   default:
  //     return state;
  return state;
};

var store = Redux.createStore(puppyReducer, INITIAL_STATE);

$('#app').html(indexTemplate());

$('#puppy-search').on('submit', function(e) {
  e.preventDefault();
  var name = $('#name').val();
  var hipsterLevel = $('#hipster-level').val();

  store.dispatch({type: 'RUN_SEARCH', name: name, hispterLevel: hipsterLevel});
})
