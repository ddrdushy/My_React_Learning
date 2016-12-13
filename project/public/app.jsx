var Greeter=React.createClass({
  getDefaultProps:function(){
    return {
      name:"React",
      message:"Hello this is from react component"
    };
  },
  getInitialState: function(){
    return {
      name:this.props.name
    };
  },
  onButtonClick: function(e){
    e.preventDefault();

    var nameRef=this.refs.name;
    var name=nameRef.value;
    nameRef.value="";

    if(typeof name=='string' && name.length>0){
      this.setState({
        name : name
      });
    }


  },
  render:function(){
    var name=this.state.name;
    var message=this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName="Dushy";

ReactDOM.render(
  <Greeter name={firstName} message="hello from react"/>,
  document.getElementById("app")
);
