import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : null}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={placeholder} />
        <div>{this.renderError(meta)}</div>
      </div>

      // first way(descriptive )
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      //
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
          placeholder="Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
          placeholder="Decsription"
        />
        <button className="ui green button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    //the error object key (title) should match with the Field props name
    error.title = "Please enter a title";
  }
  if (!formValues.description) {
    error.description = "Please enter a description";
  }
  return error;
};

export default reduxForm({
  form: "StreamForm",
  validate,
})(StreamForm);
