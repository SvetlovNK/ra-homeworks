'use strict';

const AuthForm = ({actionUrl, onAuth}) => {

  const handleChange = (event) => {
    const target = event.target;
    const validatePattern = target.getAttribute('data-validate-pattern');
    const value = target.value;
    const validatedValue = validatePattern ? validate(value, validatePattern) : value;

    target.value = validatedValue;
  };

  const submitForm = (event) => {
    if (!onAuth || !isFunction(onAuth)) return;

    event.preventDefault();

    const elements = event.target.elements;
    const {name, email, password} = elements;

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    onAuth(data);
  };

  return (
    <form className="ModalForm" onSubmit={submitForm} action={actionUrl} method="POST">
      <div className="Input">
        <input type="text" name="name" onChange={handleChange} placeholder="Имя" required/>
        <label/>
      </div>

      <div className="Input">
        <input type="email" name="email" onChange={handleChange} data-validate-pattern="email" placeholder="Электронная почта" required/>
        <label/>
      </div>

      <div className="Input">
        <input type="password" name="password" placeholder="Пароль" data-validate-pattern="password"  required/>
        <label/>
      </div>

      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  )
};
