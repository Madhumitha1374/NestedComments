const Comment = (param) => {
  const { comment } = param;
  console.log(comment);
  return (
    <div>
      <h5>➡️{comment.name}</h5>
      <p className="comment">{comment.comment}</p>
      <div className="replies">
        {comment.replies.map((reply) => (
          <Comment comment={reply} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
