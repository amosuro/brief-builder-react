var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var BriefStore = require('../../stores/BriefStore.react.jsx');
var BriefActionCreators = require('../../actions/BriefActionCreators.react.jsx');
var State = require('react-router').State;

var BriefPage = React.createClass({

  mixins: [ State ],

  getInitialState: function() {
    return {
      brief: BriefStore.getBrief(),
      errors: []
    };
  },

  componentDidMount: function() {
    BriefStore.addChangeListener(this._onChange);
    BriefActionCreators.loadBrief(this.getParams().briefId);
  },

  componentWillUnmount: function() {
    BriefStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      brief: BriefStore.getBrief(),
      errors: BriefStore.getErrors()
    });
  },

  render: function() {
    return (
      <div className="row">
        <div className="brief__title">{this.state.brief.title}</div>
        <div className="brief__user">{this.state.brief.user.username}</div>
      </div>
     );
  }

});

module.exports = BriefPage;
