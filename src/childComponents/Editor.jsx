// src/components/CKEditor.js
import React from "react";
import { QuillScript } from "../script/QuillScript";
import ReactQuill from "react-quill";

function Editor({ data, onDataChange }) {
  return (
    <ReactQuill
      className=" myQuil text-white"
      theme="snow"
      value={data}
      onChange={onDataChange}
      modules={QuillScript.modules}
      formats={QuillScript.formats}
    />
  );
}

export default Editor;
