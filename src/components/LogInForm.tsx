import React from 'react';
import SingleInputFieldLogIn from './SingleInputFieldLogIn';

type LogInForm = React.FormHTMLAttributes<HTMLFormElement>;

function LogInForm() {
  return (
    <>
      <form action="" onSubmit={() => {}}>
        <SingleInputFieldLogIn
          placeholder={'your@email.com'}
          svg={'email'}
        ></SingleInputFieldLogIn>

        <SingleInputFieldLogIn
          placeholder={'Enter your Password'}
          svg={'key'}
        ></SingleInputFieldLogIn>
      </form>
    </>
  );
}

export default LogInForm;
