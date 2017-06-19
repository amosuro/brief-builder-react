var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var BriefStore = require('../../stores/BriefStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var BriefActionCreators = require('../../actions/BriefActionCreators.react.jsx');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment');

var BriefsPage = React.createClass({

  getInitialState: function() {
    return {
      briefs: BriefStore.getAllBriefs(),
      errors: []
    };
  },

  componentDidMount: function() {
    BriefStore.addChangeListener(this._onChange);
    BriefActionCreators.loadBriefs();
  },

  componentWillUnmount: function() {
    BriefStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      briefs: BriefStore.getAllBriefs(),
      errors: BriefStore.getErrors()
    });
  },

  render: function() {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <BriefsList briefs={this.state.briefs} />
        </div>
      </div>
    );
  }
});

var BriefItem = React.createClass({
  render: function() {
    return (
      <li className="brief">
        <div className="brief__title">
          <Link to="brief" params={ {briefId: this.props.brief.id} }>
            {this.props.brief.title}
          </Link>
        </div>
        <span className="brief__user">{this.props.brief.user.username}</span>
        <span className="brief__date"> - {moment(this.props.brief.created_at).fromNow()}</span>
      </li>
      );
  }
});

var BriefsList = React.createClass({
  render: function() {
    return (
      <ul className="large-8 medium-10 small-12 small-centered columns">
        {this.props.briefs.map(function(brief, index){
          return <BriefItem brief={brief} key={"brief-" + index}/>
        })}
      </ul>
    );
  }
});

module.exports = BriefsPage;
