var BriefBuilderAppDispatcher = require('../dispatcher/BriefBuilderAppDispatcher.js');
var BriefBuilderConstants = require('../constants/BriefBuilderConstants.js');

var ActionTypes = BriefBuilderConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    BriefBuilderAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveBriefs: function(json) {
    BriefBuilderAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_BRIEFS,
      json: json
    });
  },

  receiveBrief: function(json) {
    BriefBuilderAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_BRIEF,
      json: json
    });
  },

  receiveCreatedBrief: function(json, errors) {
    BriefBuilderAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_BRIEF,
      json: json,
      errors: errors
    });
  }

};
