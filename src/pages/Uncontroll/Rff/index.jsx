import React from 'react';
import { Form, Field } from 'react-final-form';

const Rff = () => {
  const DEFAULT_VALUES = {
    name: '',
    email: '',
    password: '',
  };

  function validate(values) {
    const errors = {};
    if (!values.name || values.name.includes('A')) {
      errors.name = 'field name is wrong';
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.email || reg.test(values.email)) {
      errors.email = 'field email is wrong';
    }

    if (!values.password || values.password.length < 5) {
      errors.password = 'field password is wrong';
    }
    return errors;
  }

  const handleSubmit = (values) => {
    console.log(values);
  };

  const Rff = () => {
    const handleSubmit = (values, form) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        form.reset();
      }, 2000);
    };
  };

  return (
    <div>
      <Form initialValues={DEFAULT_VALUES} onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit }) => {
          return (
            <form action="s" onSubmit={handleSubmit}>
              <h1>React-final-form</h1>
              <Field name="name">
                {({ input, meta }) => {
                  return (
                    <>
                      <input className="input" {...input} placeholder="name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  );
                }}
              </Field>
              {<br />}
              <Field name="email">
                {({ input, meta }) => {
                  return (
                    <>
                      <input className="input" {...input} placeholder="email" />{' '}
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  );
                }}
              </Field>
              {<br />}
              <Field name="password">
                {({ input, meta }) => {
                  return (
                    <>
                      <input className="input" {...input} placeholder="password" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  );
                }}
              </Field>
              {<br />}
              <button type="submit">Send</button>
            </form>
          );
        }}
      </Form>
    </div>
  );
};

export default Rff;
