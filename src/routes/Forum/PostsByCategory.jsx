import React from "react";
import backIcon from "../../assets/icons/backButton.png"
import Button from "../../components/Button/Button";
import postIconBullet from "../../assets/icons/postBulletIcon.png"
import upvoteIcon from "../../assets/icons/upvoteIcon.png"
import downvoteIcon from "../../assets/icons/downvoteIcon.png"
import { Link, useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "How to plant tomatoes",
    description: "I need help with planting tomatoes in my garden. Any tips?",
    answersCount: 2,
    votes: {
      upvotes: 5,
      downvotes: 0
    },
    author: "John Doe",
    date: "16 Oct 2023",
    time: "12:00",
  },
  {
    id: 2,
    title: "Best fertilizer for roses",
    description: "What is the best fertilizer to use for growing beautiful roses?",
    answersCount: 4,
    votes: {
      upvotes: 10,
      downvotes: 2
    },
    author: "Jane Smith",
    date: "20 Oct 2023",
    time: "14:30",
  },
  {
    id: 3,
    title: "Tips for growing herbs indoors",
    description: "I'm looking for tips on successfully growing herbs indoors all year round. Any suggestions?",
    answersCount: 6,
    votes: {
      upvotes: 8,
      downvotes: 1
    },
    author: "Alex Johnson",
    date: "22 Oct 2023",
    time: "10:15",
  },
  {
    id: 4,
    title: "Dealing with garden pests",
    description: "I'm having trouble with garden pests. Any effective strategies for dealing with them?",
    answersCount: 3,
    votes: {
      upvotes: 6,
      downvotes: 3
    },
    author: "Sarah Thompson",
    date: "25 Oct 2023",
    time: "16:45",
  }
]

function PostsByCategory() {
  const {category} = useParams();

  return <div className="flex flex-col w-full gap-10 pt-[8%] md:pt-[5%]" >
    <Link to="/discuss" >
    <img src={backIcon} alt="" className="w-[40px]"/>
    </Link>
  <div className="flex flex-row justify-between items-center">
    <h1 className="font-bold text-3xl">General</h1>
    <Button text="Create Post" className="!w-[20%]"/>
    </div>

    <div id="posts" className="w-full">
        <table className="table-fixed w-full">
          <thead className="text-gray text-sm md:text-base">
            <tr>
              <th className="w-1/2 py-2">posts</th>
              <th className="py-2 text-center md:text-left">answers</th>
              <th className="py-2">votes</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => {
              return (
                <tr className="text-sm md:text-base">
                  <td className="flex gap-4 items-center font-bold py-4 ">
                    <img src={postIconBullet} className="w-[30px] md:w-auto"/>
                    <Link to={`/discuss/${category}/${post.id}`}>{post.title}</Link>
                  </td>
                  <td className="text-center md:text-left">{post.answersCount}</td>
                  <td><div className="flex flex-nowrap gap-2 items-center "> <img src={upvoteIcon} alt="Upvotes" className="w-4 md:w-8"/>{post.votes.upvotes} <img src={downvoteIcon} alt="Downvotes" className="w-4 md:w-8"/>{post.votes.downvotes}</div></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

  </div>;
}

export default PostsByCategory;