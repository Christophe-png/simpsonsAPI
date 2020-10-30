import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";

const simpleQuote = {
  quote: "Trying is the first step towards failure.",
  character: "Homer Simpson",
  image:
    "https://www.slate.fr/sites/default/files/styles/1060x523/public/homer-simpson_0.jpg",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: simpleQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteList quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>
          I love the quotes
        </button>
      </div>
    );
  }
}
export default App;
