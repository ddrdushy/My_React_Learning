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

    var updates={};
    var name=this.refs.name.value;
    var message=this.refs.message.value;
    if(name.length>0){
      this.refs.name.value="";
      updates.name=name;
    }

    if(message.length>0){
      this.refs.message.value="";
      updates.message=message;
    }

    this.props.onNewData(updates);
  },
  render:function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter the name"></input>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter the Message"></textarea>
        </div>
        <div>
          <button>submit</button>
        </div>
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
      name:this.props.name,
      message:this.props.message
    };
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render:function(){
    var name=this.state.name;
    var message=this.state.message;
    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        <FormComponent onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName="Dushy";

ReactDOM.render(
  <Greeter name={firstName} message="hello from react"/>,
  document.getElementById("app")
);
