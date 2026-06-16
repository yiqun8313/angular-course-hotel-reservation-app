import { useState } from "react";
import "./NestedComments.css";

const initialComments = [
  {
    id: 1,
    text: "This is the first comment.",
    replies: [
      {
        id: 2,
        text: "This is a reply.",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    text: "This is another comment.",
    replies: [],
  },
];

function Comment({ comment, onReply }) {
  const [reply, setReply] = useState("");

  function submitReply(event) {
    event.preventDefault();
    if (!reply.trim()) return;

    onReply(comment.id, reply);
    setReply("");
  }

  return (
    <div className="comment">
      <p>{comment.text}</p>

      <form onSubmit={submitReply}>
        <input
          value={reply}
          placeholder="Write a reply"
          onChange={(event) => setReply(event.target.value)}
        />
        <button type="submit">Reply</button>
      </form>

      {comment.replies.map((child) => (
        <Comment key={child.id} comment={child} onReply={onReply} />
      ))}
    </div>
  );
}

function addReply(comments, parentId, text) {
  return comments.map((comment) => {
    if (comment.id === parentId) {
      return {
        ...comment,
        replies: [
          ...comment.replies,
          { id: crypto.randomUUID(), text, replies: [] },
        ],
      };
    }

    return {
      ...comment,
      replies: addReply(comment.replies, parentId, text),
    };
  });
}

function NestedComments() {
  const [comments, setComments] = useState(initialComments);

  function handleReply(parentId, text) {
    setComments((current) => addReply(current, parentId, text));
  }

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onReply={handleReply} />
      ))}
    </div>
  );
}

export default NestedComments;
