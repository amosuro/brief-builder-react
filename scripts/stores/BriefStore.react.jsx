var BriefBuilderAppDispatcher = require('../dispatcher/BriefBuilderAppDispatcher.js');
var BriefBuilderConstants = require('../constants/BriefBuilderConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = BriefBuilderConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _briefs = [];
var _errors = [];
var _brief = { title: "", user: { username: "" } };

var BriefStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllBriefs: function() {
    return _briefs;
  },

  getBrief: function() {
    return _brief;
  },

  getErrors: function() {
    return _errors;
  }

});

BriefStore.dispatchToken = BriefBuilderAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_BRIEFS:
      _briefs = action.json.briefs;
      BriefStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CREATED_BRIEF:
      if (action.json) {
        _briefs.unshift(action.json.brief);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      BriefStore.emitChange();
      break;

    case ActionTypes.RECEIVE_BRIEF:
      if (action.json) {
        _brief = action.json.brief;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      BriefStore.emitChange();
      break;
  }

  return true;
});

module.exports = BriefStore;
