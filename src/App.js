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
    //   if clicked and id is not in clicked Array, (1)add to array, (2)add points, (3)randomize order

    if (this.state.clicked.includes(id)) {
      this.setState({
        clicked: [],
        alert: "OOPS - That's the Game!"
      });
      this.clearAlert();
    } else if (this.state.clicked.length + 1 === cast.length) {
      this.setState({
        clicked: [],
        alert: "You Win!"
      });
      this.clearAlert();
    } else {
      //  if clicked and matches id in array then reset score, no points
      this.setState({
        clicked: [...this.state.clicked, id],
        alert: ""
      });
    }
  };

  clearAlert = () => {
    setTimeout(() => {
      this.setState({
        alert: ""
      });
    }, 2250);
  };

  // Map over this.state.cast and render a CastCard component for each cast member object
  render() {
    // randomize cards
    const randomCast = cast.sort(() => 0.9 - Math.random());
    return (
      <Wrapper>
        <Title>
          <div className="score">score: {this.state.clicked.length}</div>

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
