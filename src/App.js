import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CastCard from "./components/CastCard";
import cast from "./Daria.json";
// import "./App.css";

class App extends Component {
  // clicks
  state = {
    clicked: [],
    alert: ""
  };

  cardClick = id => {
    // if this id is clicked, add to clicked Array,
    //   if clicked and id is not in clicked Array, (1)add to array, 

    if (this.state.clicked.includes(id)) {
      this.setState({
        clicked: [],
        alert: "OOPS - That's the Game!"
      });
      this.showAlert();


    } else if (this.state.clicked.length + 1 === cast.length) {
      this.setState({
        clicked: [],
        alert: "You Win!"
      });
      this.showAlert();
    } else {
      //  if clicked and matches id in array then reset score, no points
      this.setState({
        clicked: [...this.state.clicked, id],
        alert: ""
      });
    }
  };

  showAlert = () => {
    setTimeout(() => {
      this.setState({
        alert: ""
      });
    }, 4000);
  };

  
  render() {
    // (3)randomize order - randomize cards 
    const randomCast = cast.sort(() => 0.9 - Math.random());
    // Map over this.state.cast and render a CastCard component for each cast member object
    return (
      <Wrapper>
        <Title>
          <div className="score"><h3>score: {this.state.clicked.length} </h3></div>
          
          {this.state.alert && <Title>{this.state.alert}</Title>}
        </Title>

        {randomCast.map(({ id, name, image }) => (
          <CastCard
            cardClick={this.cardClick}
            id={id}
            name={name}
            image={image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
