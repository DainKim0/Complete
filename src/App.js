import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global-style";
import DragDrop from "./components/DragDrop";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import Main from "./pages/Main";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
