import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global-style";
import Upload from "./pages/Upload";
import Result from "./pages/Result";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
