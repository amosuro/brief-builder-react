var React = require('react');
var BriefBuilderAppDispatcher = require('../../dispatcher/BriefBuilderAppDispatcher.js');
var BriefBuilderConstants = require('../../constants/BriefBuilderConstants.js');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var BriefActionCreators = require('../../actions/BriefActionCreators.react.jsx');
var RouteActionCreators = require('../../actions/RouteActionCreators.react.jsx');

var BriefNew = React.createClass({

  componentDidMount: function() {
    if (!SessionStore.isLoggedIn()) {
      RouteActionCreators.redirect('app');
    }
  },

  _onSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value;
    BriefActionCreators.createBrief(title);
  },

  render: function() {
    return (
      <div className="row">
        <form onSubmit={this._onSubmit} className="new-brief">
          <div className="new-brief__title">
            <input type="text" placeholder="Title" name="title" ref="title" />
          </div>
          <div className="new-brief__submit">
            <button type="submit">Create</button>
          </div>
         </form>
       </div>
     );
  }

});

module.exports = BriefNew;
