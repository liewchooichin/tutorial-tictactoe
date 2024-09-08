import PropTypes from "prop-types";
import { useState } from 'react';

export  function FormWater() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That&apos;s right! Check the console.log. 
      It has the promise data.</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const promiseData = await submitForm(answer);
      console.log(`Response: ${promiseData}`);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }


  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>

        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }

      </form>
    </>
  );
}

// Checking the answer
function checkAnswer(answer, resolve, reject){
  let shouldError = (answer.toLowerCase() !== 'lima');
  if (shouldError) {
    return reject(new Error('Good guess but a wrong answer. Try again!'));
  } else {
    return resolve("Answer: Lima");
  }
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      checkAnswer(answer, resolve, reject)
    }, 1500);
  });
}
