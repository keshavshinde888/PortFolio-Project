// RichTextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles
import { Paper,Container } from '@mui/material';

const EditorComponent = ({ onChange }) => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
    onChange(value); // Call the parent component's callback function
  };
  return (
    <Container>
        <ReactQuill
          value={text}
          onChange={handleChange}
          theme="snow"
          placeholder="Write something amazing..."
          className="ql-editor custom-quill"
        />
    </Container>
  );
};

export default EditorComponent;
