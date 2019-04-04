import React, { Component } from "react";

class ButtonTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
      dislikeCount: 0
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike(event) {
    this.setState({ likeCount: this.state.likeCount + 1 });
  }

  handleDislike(event) {
    this.setState({ dislikeCount: this.state.dislikeCount + 1 });
  }

  render() {
    return (
      <div className="button-page">
        <h3>Let's Build a Button</h3>
        <button className="like-button" onClick={this.handleLike}>
          Like {this.state.likeCount}
        </button>
        <button className="dislike-button" onClick={this.handleDislike}>
          Dislike {this.state.dislikeCount}
        </button>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ButtonTest;
