var React = require('react');
var $ = require('jquery');

var CommentBox = React.createClass({
	getInitialState: function () {
		return { data: [] };
	},
	componentDidMount: function () {
		this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	loadCommentsFromServer: function () {
		var rt = this;
		$.ajax('data.js').done(function (res) {
			console.log((new Date()).toLocaleString());
			var resJSON = JSON.parse(res);
			rt.setState({ data: resJSON });
		}).fail(function () {
			console.log('error');
		});
	},
	handleCommentSubmit:function(comment){
		var comments=this.state.data;
		var newComments=comments.concat([comment]);
		this.setState({data:newComments});
	},
	render: function () {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function () {
		var Comments = this.props.data.map(function (item) {
			return <Comment author={item.author}>{item.text}</Comment>
		});
		return (
			<div className="commentList">
				{Comments}
			</div>
		);
	}
});
var Comment = React.createClass({
	render: function () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">{this.props.author}</h2>
				{this.props.children}
			</div>
		);
	}
});
var CommentForm = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		var author = this.refs.author.value.trim();
		var text = this.refs.text.value.trim();
		if (!text || !author) {
			return;
		}
		this.props.onCommentSubmit({author:author,text:text});
		this.refs.author.value = '';
		this.refs.text.value = '';
		return;
	},
	render: function () {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="your name" ref="author" />
				<input type="text" placeholder="Say something..." ref="text" />
				<input type="submit" value="Post" />
			</form>
		);
	}
});
module.exports = CommentBox;



