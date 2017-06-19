var BriefBuilderAppDispatcher = require('../dispatcher/BriefBuilderAppDispatcher.js');
var BriefBuilderConstants = require('../constants/BriefBuilderConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = BriefBuilderConstants.ActionTypes;

module.exports = {

  loadBriefs: function() {
    BriefBuilderAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_BRIEFS
    });
    WebAPIUtils.loadBriefs();
  },

  loadBrief: function(briefId) {
    BriefBuilderAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_BRIEF,
      briefId: briefId
    });
    WebAPIUtils.loadBrief(briefId);
  },

  createBrief: function(title) {
    BriefBuilderAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_BRIEF,
      title: title
    });
    WebAPIUtils.createBrief(title);
  }

};
