import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
 * You can still declare some constants for readability.
 * But they’re not state variables, so you don’t need to
 * worry about them getting out of sync with each other.
 */

export function FeedbackForm() {
  /**
   * Possible status: typing, sending, sent.
   */
  const [feedbackText, setFeedbackText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleClick(e) {
    e.preventDefault();
    setStatus('sending');
    const data = await sendMessage(feedbackText);
    console.log(`Data: ${data}`);
    setStatus('sent');
  }

  const isSending = (status === 'sending');
  const isSent = (status === 'sent');

  if (isSent) {
    return <h2>Thanks for feedback!</h2>
  }

  return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="feedbackText">
                How was your stay at The Prancing Pony?
            </Form.Label>
            <Form.Control 
                as="textarea"
                id="feedbackText"
                name="feedbackText"
                rows={3}
                disabled={isSending}
                value={feedbackText}
                onChange={(e=>setFeedbackText(e.target.value))}
            ></Form.Control>
            <Form.Text>Let us know your experience.</Form.Text>
            <Button 
                variant="primary"
                id="btnSend"
                name="btnSend"
                disabled={isSending}
                onClick={handleClick}
                type="button"
            >
            Send
            </Button>
            {isSending && <p>Sending ...</p>}
        </Form.Group>
    </Form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve(`Has already sent: ${text}`), 5000);
  });
}
