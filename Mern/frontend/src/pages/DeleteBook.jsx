import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handelDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("some error check git hub page");
        console.log(error);
      });
  };
  return (
    <div
      className="p-4 h-screen"
      style={{
        backgroundImage:
          'url("https://miro.medium.com/v2/resize:fit:720/format:webp/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg")',
      }}
    >
      <BackButton />
      <h1
        className="text-3xl my-4 mx-4 p-4"
        style={{ backgroundColor: "rgba(246, 246, 246, 0.5)" }}
      >
        Delete Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div
        className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto"
        style={{ backgroundColor: "rgba(246, 246, 246)" }}
      >
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handelDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
