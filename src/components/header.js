import React from "react";

class Header extends React.Component {
  state = {
    keywords: "",
  };

  inputChange = (event) => {
    this.setState({
      keywords: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <header>
            <div className="logo">Code News</div>
            <input onChange={this.inputChange}></input>
            <br></br>

            <br></br>
          </header>
          <br></br>
        </div>
      </>
    );
  }
}
export default Header;
