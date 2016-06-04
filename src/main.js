var React = require('react');
var ReactDom = require('react-dom');
var Hello = require('./hello');

var CommentBox = require('./components/CommentBox/index');
var TickTock = require('./components/TickTock/index');
var FancyCheckbox = require('./components/examples/fancy-checkbox');
var FindDOMNode = require('./components/examples/findDOMNode');


ReactDom.render(
    <div>
        <FancyCheckbox checked={true} onClick={console.log.bind(console) }>
            Hello world!
        </FancyCheckbox>
        <FindDOMNode></FindDOMNode>
        <TickTock></TickTock>
        <CommentBox pollInterval={2000}></CommentBox>

    </div>,
    document.getElementById('container'));