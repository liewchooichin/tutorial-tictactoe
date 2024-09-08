import PropTypes from "prop-types";

Form1.propTypes = {
    status: PropTypes.string.isRequired
}
function Form1({ status }) {
    if (status === 'success') {
      return <h1>That&apos;s right!</h1>
    }
    return (
      <form>
        <textarea disabled={
          status === 'submitting'
        } />
        <br />
        <button disabled={
          status === 'empty' ||
          status === 'submitting'
        }>
          Submit
        </button>
        {status === 'error' &&
          <p className="Error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
    );
  }
  


const statusList = [
'empty',
'typing',
'submitting',
'success',
'error',
];

export function ListAllStatus() {
return (
    <>
    {statusList.map(status => (
        <section key={status}>
        <h4>Form ({status}):</h4>
        <Form1 status={status} />
        </section>
    ))}
    </>
);
}
  