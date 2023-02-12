import React, { useEffect, useState, useRef } from 'react';

const Uncontroll = () => {
  const inputRef = useRef(null);

  //   useEffect(() => {
  //     const form = document.forms.uncontrol;
  //     const name = form.elements.name;
  //     const value = name.value;

  //     const inputName = inputRef.current;

  //     if (inputName instanceof HTMLInputElement) {
  //       inputName.focus();
  //     }

  //     console.log(value);
  //   }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const submit = document.getElementById('submitBtn');

    const payload = {
      name,
      email,
      password,
    };

    submit.disabled = true;

    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      submit.disabled = false;
      form.reset();
    }, 2000);

    console.log(name, email, password);
  };

  return (
    <>
      <form action=""></form>
      <div className="page">
        <form className="form" name="uncontroll" onSubmit={handleSubmit}>
          <h1>Неконтролируемая форма</h1>
          <input type="text" name="name" placeholder="name" ref={inputRef} />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button id="submitBtn" type="submit" className="submit">
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};

export default Uncontroll;
