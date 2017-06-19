var BriefBuilderConstants = require('../constants/BriefBuilderConstants.js');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = BriefBuilderConstants.PayloadSources;

var BriefBuilderAppDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = BriefBuilderAppDispatcher;
