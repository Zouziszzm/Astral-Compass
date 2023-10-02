import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"; // Corrected import statements

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-200 rounded-md">No</th>
          <th className="border border-slate-200 rounded-md">Title</th>
          <th className="border border-slate-200 rounded-md ">Author</th>
          <th className="border border-slate-200 rounded-md ">Publish Year</th>
          <th className="border border-slate-200 rounded-md ">Operations</th>
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
  );
};

export default BooksTable;
