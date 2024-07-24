import Posts from "./Posts";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SightJp() {
  const [increment, setIncrement] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, formData]);
    setFormData({ name: "", comment: "" });
  };

  function handleIncrement() {
    setIncrement(increment + 1);
  }
  function handleDecrement() {
    setIncrement(increment - 1);
  }

  return (
    <div>
      <img
        className="Vending Vending__sight"
        alt=""
        src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iCiwMT_bMKV4/v2/-1x-1.jpg"
      />
      <p>{increment}</p>
      <button className="btn" onClick={handleIncrement}>
        Like
      </button>
      <button className="btn" onClick={handleDecrement}>
        Dislike
      </button>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="inputRequired">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputRequired">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="comments-section">
          <h2>Comment Section</h2>
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  <strong>{comment.name}:</strong> {comment.comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
