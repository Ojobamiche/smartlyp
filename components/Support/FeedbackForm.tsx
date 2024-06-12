import { useState } from 'react';
import { submitFeedback } from '../../lib/api/feedback';
import { useUser } from '../../lib/hooks/useUser';

export default function FeedbackForm() {
  const { user } = useUser();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      setStatus('Feedback message cannot be empty');
      return;
    }
    try {
      await submitFeedback(user.uid, message);
      setMessage('');
      setStatus('Feedback submitted successfully');
    } catch (error) {
      setStatus('Error submitting feedback');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your feedback"
        required
      ></textarea>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}
