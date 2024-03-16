import { useEffect } from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Madhu",
    comment: "Must watch",
    replies: [
      {
        name: "Madhavi",
        comment: "Must cgvhjkl hjk gvhjkl gvhjk ghjk ",
        replies: [
          {
            name: "Keerthi",
            comment: "Must dfgghjhsdjfhiuficbdshbsudgfieufgsdbdsvhdsvds",
            replies: [],
          },
        ],
      },
      {
        name: "Madhu",
        comment:
          "jhdeuifbksdbv hfdgiufbsdnv nbx vskdhsiudkhfbsjbf ewfihoesi watch",
        replies: [
          {
            name: "Chinni",
            comment:
              "sdjfsff fefbewfboewv oihfhewufwef ejfwehv ejhwaifhs ehwufhwef ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Madhu",
    comment: "Must watch",
    replies: [
      {
        name: "Prathap",
        comment: "Must watch",
        replies: [
          {
            name: "Balu",
            comment: "Must watch",
            replies: [
              {
                name: "Madhu",
                comment: "Must watch",
                replies: [
                  {
                    name: "Chinni",
                    comment: "Must watch",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Madhu",
    comment: "Must watch",
    replies: [
      {
        name: "Priya",
        comment: "Must watch",
        replies: [
          {
            name: "Hari",
            comment: "Must watch",
            replies: [],
          },
        ],
      },
      {
        name: "Madhu",
        comment: "Must watch",
        replies: [
          {
            name: "Prathibha",
            comment: "Must watch",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Madhu",
    comment: "Must watch",
    replies: [
      {
        name: "Vegnu",
        comment: "Must watch",
        replies: [
          {
            name: "Vidya",
            comment: "Must watch",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Madhu",
    comment: "Must watch",
    replies: [
      {
        name: "kumari",
        comment: "Must watch",
        replies: [
          {
            name: "Anu",
            comment: "Must watch",
            replies: [],
          },
        ],
      },
      {
        name: "Likki",
        comment: "Must watch",
        replies: [
          {
            name: "Bhavya",
            comment: "Must watch",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Madhu",
    comment: "Must watch",
    replies: [
      {
        name: "Akki",
        comment: "Must watch",
        replies: [
          {
            name: "Arjun",
            comment: "Must watch",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comments = () => {
  return (
    <div className="comment-container">
      {commentsData.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
