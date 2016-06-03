var React=require('react');

var Hello=React.createClass({

	getInitialState:function(){
		console.log('getInitialState:'+this.num++);
		return {
			name:'allen',
			age:'20'
		}
	},
	num:0,
	componentDidMount:function(){
		console.log('componentDidMount:'+this.num++);
	},
	render:function(){
		console.log('render:'+this.num++);
		return (<div>Hello,{this.props.name}!</div>);
	}
})

module.exports=Hello;