import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitForm, setSubmitForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitForm(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <h2>With any question about me Contact me here.</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
        {submitForm && <p>Thank you for your time, have a good one.</p>}
      </form>
    </div>
  );
}
