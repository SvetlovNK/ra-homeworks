'use strict';

const AuthForm = ({actionUrl, onAuth}) => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="ModalForm" onSubmit={submitForm} action={actionUrl} method="POST">
      <Name/>
      <Email/>
      <Password/>
      <button onClick={onAuth} type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  )
};
