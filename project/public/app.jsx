var GreeterMessage=React.createClass({
  render:function(){
    var name=this.props.name;
    var message=this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var FormComponent=React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();

    var name=this.refs.name.value;
    if(name.length>0){
      this.refs.name.value="";
      this.props.onNewName(name);
    }
  },
  render:function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"></input>
        <button>Set Name</button>
      </form>
    );
  }
});

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
  handleNewName: function(name){
    this.setState({
      name:name
    });
  },
  render:function(){
    var name=this.state.name;
    var message=this.props.message;
    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        <FormComponent onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName="Dushy";

ReactDOM.render(
  <Greeter name={firstName} message="hello from react"/>,
  document.getElementById("app")
);
