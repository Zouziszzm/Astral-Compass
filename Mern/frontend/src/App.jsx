import { Route, Routes } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import UpdateBook from "./pages/UpdateBook";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Books/create" element={<CreateBook />} />
      <Route path="/Books/delete/:id" element={<DeleteBook />} />
      <Route path="/Books/update/:id" element={<UpdateBook />} />
      <Route path="/Books/dets/:id" element={<ShowBook />} />
    </Routes>
  );
}

export default App;
