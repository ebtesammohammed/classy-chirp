import React, { useState } from "react";
import ChirpCard from "./ChirpCard";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        message: "",
      todos: [
        { id: uuidv4(), username: "John Smith", message: "Whats the problem" },
        { id: uuidv4(), username: "Zack Afron", message: "Why it happen" },
        { id: uuidv4(), username: "afrah moh", message: "How to solve it " },
      ],
    };
  }

  // componentDidMount() {
  //     setTimeout(() =>{
  //         todos: [
  //             ...this.state.todos,
  //             { id: uuidv4(), username: "John Smith" },
  //             { id: uuidv4(), message: "Whats the problem" },
  //             { id: uuidv4(), username: "Zack Afron"},
  //             { id: uuidv4(),  message: "Why it happen"},
  //             { id: uuidv4(), username: "afrah moh"},
  //             { id: uuidv4(),  message: "How to solve it "}

  //         ]
  //     }, 1000);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      username: "",
      todos: [
        ...this.state.todos,
        { id: uuidv4(), username: this.state.username },
      ]
    });
  }

  render() {
    return (
      <main className="container">
        <section className="row justify-content-center mt-5">
          <div className="col-md-7">
            <form className="form-group">
              <label> username and message </label>
              <input
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <input
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              />
              <button
                onClick={(e) => this.handleSubmit(e)}
                className="btn btn-primary mt-3"
              >
                {" "}
                Chirp it{" "}
              </button>
              <section className="row justify-content-center mt-3">
                <div className=" col-md-6">
                  <ul className="list-group">
                    {this.state.todos.map((todo) => (
                      <ChirpCard key={`todo-username-${todo.id}`} todo={todo} />
                    ))}
                  </ul>
                </div>
              </section>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
