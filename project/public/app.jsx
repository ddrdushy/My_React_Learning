var Greeter=React.createClass({
  render:()=>{
    return(
      <div>
        <h1>Hello React!</h1>
        <p>Hello this is from react component</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById("app")
);
