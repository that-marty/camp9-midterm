import React from 'react';
import InputForm from './InputForm';

type LogInForm = React.FormHTMLAttributes<HTMLFormElement>;

function LogInForm() {
  return (
    <>
      <form action="" onSubmit={() => {}}>
        <InputForm placeholder={'your@email.com'} svg={'email'}></InputForm>
        <InputForm placeholder={'your@email.com'} svg={'email'}></InputForm>
      </form>
    </>
  );
}

export default LogInForm;
