import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Strem</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate: validate
// })(StreamCreate);

export default connect(
  null,
  { createStream }
)(StreamCreate);
