var Greeter=React.createClass({
  getDefaultProps:function(){
    return {
      name:"React"
    };
  },
  render:function(){
    var name=this.props.name;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>Hello this is from react component</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById("app")
);
