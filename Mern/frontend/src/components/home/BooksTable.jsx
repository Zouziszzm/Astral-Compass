import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"; // Corrected import statements

const BooksTable = ({ books }) => {
  return (
    <table className="w-full ">
      <thead>
        <tr>
          <th
            className="border border-slate-200 "
            style={{ backgroundColor: "rgba(246, 246, 246)" }}
          >
            No
          </th>
          <th
            className="border border-slate-200 "
            style={{ backgroundColor: "rgba(246, 246, 246)" }}
          >
            Title
          </th>
          <th
            className="border border-slate-200 "
            style={{ backgroundColor: "rgba(246, 246, 246)" }}
          >
            Author
          </th>
          <th
            className="border border-slate-200  "
            style={{ backgroundColor: "rgba(246, 246, 246)" }}
          >
            Publish Year
          </th>
          <th
            className="border border-slate-200  "
            style={{ backgroundColor: "rgba(246, 246, 246)" }}
          >
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8 rounded ">
            <td
              className="border border-slate-200  text-center"
              style={{ backgroundColor: "rgba(246, 246, 246)" }}
            >
              {index + 1}
            </td>
            <td
              className="border border-slate-200  text-center"
              style={{ backgroundColor: "rgba(246, 246, 246)" }}
            >
              {book.title}
            </td>
            <td
              className="border border-slate-200  text-center"
              style={{ backgroundColor: "rgba(246, 246, 246)" }}
            >
              {book.author}
            </td>
            <td
              className="border border-slate-200  text-center "
              style={{ backgroundColor: "rgba(246, 246, 246)" }}
            >
              {book.publishyear}
            </td>
            <td
              className="border border-slate-200  text-center"
              style={{ backgroundColor: "rgba(246, 246, 246)" }}
            >
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
