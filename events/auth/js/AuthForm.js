'use strict';

const AuthForm = ({actionUrl, onAuth}) => {
  const authData = {
    name: undefined,
    email: undefined,
    password: undefined,
  };

  const onInputChange = (target) => {
    const name = target.name;
    const value = target.value;

    authData[name] = value;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if(!onAuth || !isFunction(onAuth)) return;

    onAuth(authData);
  };

  return (
    <form className="ModalForm" onSubmit={submitForm} action={actionUrl} method="POST">
      <Name onInputChange={onInputChange}/>
      <Email onInputChange={onInputChange}/>
      <Password onInputChange={onInputChange}/>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  )
};
