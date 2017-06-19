var BriefBuilderAppDispatcher = require('../dispatcher/BriefBuilderAppDispatcher.js');
var BriefBuilderConstants = require('../constants/BriefBuilderConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = BriefBuilderConstants.ActionTypes;

module.exports = {

  signup: function(email, username, password, passwordConfirmation) {
    BriefBuilderAppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, username, password, passwordConfirmation);
  },

  login: function(email, password) {
    BriefBuilderAppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout: function() {
    BriefBuilderAppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }

};
