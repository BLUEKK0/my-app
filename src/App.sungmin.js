import React from "react";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return(
<Container>
  <Input placeholder="테마를 입력하세요"
    onKeyPress={this.handleInputKeyPress}
  ></Input>
</Container>
    ) 
  }

  handleInputKeyPress = event => {
    if (event.key ==="Enter"){
      console.log(event.target.value);
    }
  }
}
const Input = styled.input`
    position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20,20,20,0.1) 10%,
      rgba(20,20,20,0.7) 70%,
      rgba(20,20,20,1)
     ),
    url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
  `;



export default App;
