import React, { useState } from 'react';
import cn from 'classnames';

const DEFAULT_VALUES = {
  name: '',
  email: '',
  password: '',
  nameError: null,
  emailError: null,
  passwordError: null,
};

const Controll = () => {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    console.log(name);
    let value = target.value;

    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const validate = (values, setValues) => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (!values.name || !values.name.includes('A')) {
      nameError = 'field name is wrong';
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.email || reg.test(values.email)) {
      emailError = 'field email is wrong';
    }

    if (!values.password || values.password.length < 5) {
      passwordError = 'field password is wrong';
    }

    setValues((prevState) => ({
      ...prevState,
      nameError,
      emailError,
      passwordError,
    }));

    return nameError || emailError || passwordError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const invalid = validate(values, setValues);

    if (invalid) return;

    setDisabled(true);

    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setValues(payload);
      setDisabled(false);
    }, 2000);

    console.log(values);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        onChange={handleChange}
        style={{ textAlign: 'center' }}>
        <h1>
          Контролируемая форма{<br />}
          <input type="text" placeholder="name" value={values.name} name="name" />
          {values.nameError && <span>{values.nameError}</span>}
          {<br />}
          <input type="text" placeholder="email" value={values.email} name="email" />
          {<br />}
          {values.emailError && <span>{values.emailError}</span>}
          <input type="password" placeholder="password" value={values.password} name="password" />
          {<br />}
          {values.passwordError && <span>{values.passwordError}</span>}
          <button id="btn" disabled={disabled}>
            Send
          </button>
        </h1>
      </form>
    </div>
  );
};

export default Controll;
