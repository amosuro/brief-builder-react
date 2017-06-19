var BriefBuilderAppDispatcher = require('../dispatcher/BriefBuilderAppDispatcher.js');
var BriefBuilderConstants = require('../constants/BriefBuilderConstants.js');

var ActionTypes = BriefBuilderConstants.ActionTypes;

module.exports = {

  redirect: function(route) {
    BriefBuilderAppDispatcher.handleViewAction({
      type: ActionTypes.REDIRECT,
      route: route
    });
  }

};
