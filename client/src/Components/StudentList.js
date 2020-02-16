import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getStudents, deleteStudent } from "../actions/studentAction";
import PropTypes from "prop-types";
import { Table, Tab } from "react-bootstrap";

export class StudentList extends Component {
  static propTypes = {
    getStudents: PropTypes.func.isRequired,
    studentName: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getStudents();
  }

  onDeleteClick = id => {
    this.props.deleteStudent(id);
  };

  render() {
    const { studentName } = this.props.studentName;
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>AvgScore</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="student-list">
            {studentName.map(({ _id, name, subjectCount, scoreAverage }) => (
              <tr key={_id}>
                <td>{_id}</td>
                <td>
                  {name} <i class="material-icons">&#xe22b;</i>
                </td>
                <td>{subjectCount}</td>
                <td>{scoreAverage}</td>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  &times;
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  studentName: state.studentName,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  getStudents,
  deleteStudent
})(StudentList);
