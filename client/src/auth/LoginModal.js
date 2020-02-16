import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";

import { connect } from "react-redux";
import { clearErrors } from "../actions/errorAction";
import Proptypes from "prop-types";
import { login } from "../actions/authAction";
class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: Proptypes.bool,
    error: Proptypes.object.isRequired,
    login: Proptypes.func.isRequired,
    clearErrors: Proptypes.func.isRequired
  };
  //Error satt
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    //If authenticated close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    //Clear Errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    //referes to the target name
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };
    //Attemp to login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Login
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="mb-3"
                  placeholder="Ex: JohnSmith@gmail.com"
                  onChange={this.onChange}
                />
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="mb-3"
                  placeholder="password"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
