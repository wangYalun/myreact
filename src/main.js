var React=require('react');
var ReactDom=require('react-dom');
var Hello=require('./hello');

var CommentBox=require('./components/CommentBox/index');


ReactDom.render(<CommentBox pollInterval={2000}></CommentBox>,document.getElementById('container'));