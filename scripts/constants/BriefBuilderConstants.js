var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3000";

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
    REGISTRATION:   APIRoot + "/v1/users",
    BRIEFS:         APIRoot + "/v1/briefs"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,

    // Routes
    REDIRECT: null,

    // Briefs
    LOAD_BRIEFS: null,
    RECEIVE_BRIEFS: null,
    LOAD_BRIEF: null,
    RECEIVE_BRIEF: null,
    CREATE_BRIEF: null,
    RECEIVE_CREATED_BRIEF: null
  })

};
