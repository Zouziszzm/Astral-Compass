import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"; // Corrected import statements

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className=" text-sky-400 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-200 rounded-md">No</th>
              <th className="border border-slate-200 rounded-md">Title</th>
              <th className="border border-slate-200 rounded-md ">Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-200 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-200 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-200 rounded-md text-center">
                  {book.author}
                </td>
                <td className="border border-slate-200 rounded-md text-center ">
                  {book.publishyear}
                </td>
                <td className="border border-slate-200 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/dets/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-cyan-200" />
                    </Link>
                    <Link to={`/books/update/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-orange-200" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-200" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
