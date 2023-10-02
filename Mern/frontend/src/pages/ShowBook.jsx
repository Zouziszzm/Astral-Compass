import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBook(res.data); // Update the state with the response data
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); // Make sure to include id in the dependency array

  return (
    <>
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
          style={{ backgroundColor: "rgba(246, 246, 246,0.5)" }}
        >
          ShowBook
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div
            className="flex flex-col border-2 border-sky-200 rounded-xl w-fit p-4 mx-4"
            style={{ backgroundColor: "rgba(246, 246, 246)" }}
          >
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span className="text-xl mr-4 text-gray-500">{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span className="text-xl mr-4 text-gray-500">{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish year</span>
              <span className="text-xl mr-4 text-gray-500">
                {book.publishyear}
              </span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span className="text-xl mr-4 text-gray-500">
                {new Date(book.updateAt).toString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowBook;
