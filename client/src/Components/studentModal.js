import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import { addStudent } from "../actions/studentAction";
import PropTypes from "prop-types";

class StudentModal extends Component {
  state = {
    modal: false,
    name: "",
    subjectCount: "",
    scoreAverage: ""
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };
  toggle = () => {
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
    const { name, subjectCount, scoreAverage } = this.state;
    const newStudent = {
      name,
      subjectCount,
      scoreAverage
    };

    //Add Student via addStudent action
    this.props.addStudent(newStudent);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Student
          </Button>
        ) : (
          <h4 className="mb-3 ml-4">Please log in to manage students</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To StudentList</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="student">Student</Label>
                <Input
                  type="text"
                  name="name"
                  id="student"
                  placeholder="Ex: John Smith"
                  onChange={this.onChange}
                />
                <Label for="studentSubject">Subject</Label>
                <Input
                  type="text"
                  name="subjectCount"
                  id="studentSubject"
                  placeholder="Ex: John Smith"
                  onChange={this.onChange}
                />
                <Label for="studentScore">Score</Label>
                <Input
                  type="text"
                  name="scoreAverage"
                  id="studentScore"
                  placeholder="Ex: John Smith"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Student
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
  student: state.studentName,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addStudent })(StudentModal);
