var $ = require('jquery');
var Redux = require('redux');
var indexTemplate = require('../templates/index.hbs');
var loadingTemplate = require('../templates/load.hbs');

var RUN_SEARCH = 'RUN_SEARCH';

var INITIAL_STATE = {
  showLoading: false,
  name: '',
  hipsterLevel: 0,
};


function puppyReducer(state, action) {
  switch (action.type) {
    case RUN_SEARCH:
      state.name = action.name;
      state.hipsterLevel = action.hipsterLevel;
      state.showLoading = true;

    default:
      return state;
  };
};

var store = Redux.createStore(puppyReducer, INITIAL_STATE);
store.subscribe(showLoading);

function showHome() {
  $('#app').html(indexTemplate());

  $('#puppy-search').on('submit', function(e) {
    e.preventDefault();

    var name = $('#name').val();
    var hipsterLevel = $('#hipster-level').val();

    store.dispatch({type: RUN_SEARCH, name: name, hipsterLevel: hipsterLevel});

  });
};

function showLoading() {
  console.dir(store.getState());
  var state = store.getState();

  // if we're not supposed to show the loading screen, bail
  if (!state.showLoading) {
    return;
  }

  $('#app').html(loadingTemplate());
};

showHome();
