import "./App.css";
import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/authAction";
import { Container } from "reactstrap";
import StudenList from "./Components/StudentList";
import StudentModal from "./Components/studentModal";
import Navbar from "./Components/Navbar";
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Container>
          <StudentModal />
          <StudenList />
        </Container>
      </Provider>
    );
  }
}

export default App;
