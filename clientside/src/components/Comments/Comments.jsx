import React, { useState,useEffect } from "react";
import "./Comments.scss";
import avatar from "../photos/channelImg.jpg";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import axios from 'axios'

const Comments = ({videoId}) => {

  const currentUser = useSelector((state) => state.user.currentUser);

  const [comments,setComments] = useState([])

  useEffect(()=>{
    const fetchComments = async()=>{
      try{
        const res = await axios.get(`/api/comments/${videoId}`,{withCredentials:true})
        setComments(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchComments()
  },[videoId])
  return (
    <>
      <div className="Commentsscontainer">
        <div className="NumberOfComments">9,732 Comments</div>
        <div className="NewComment">
          <img src={currentUser.img} alt="" />
          <input type="text" placeholder="Add a comment.." />
        </div>
      </div>
      {comments.map((cmnt)=>(
        <Comment key={comments[0]._id} comments = {comments[0]} />
      ))}
    </>
  );
};

export default Comments;
