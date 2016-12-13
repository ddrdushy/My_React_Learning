var GreeterMessage=React.createClass({
  render:function(){
    return(
      <div>
        <h1>Hello h1!</h1>
        <p>paragraph</p>
      </div>
    );
  }
});

var FormComponent=React.createClass({
  render:function(){
    return(
      <form>
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

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button>Set Name</button>
        </form>

        <FormComponent/>
      </div>
    );
  }
});

var firstName="Dushy";

ReactDOM.render(
  <Greeter name={firstName} message="hello from react"/>,
  document.getElementById("app")
);
