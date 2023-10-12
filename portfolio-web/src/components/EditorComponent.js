// RichTextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles
import { Paper,Container } from '@mui/material';

const EditorComponent = () => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
    console.log(value)
  };

  return (
    <Container>
        <ReactQuill
          value={text}
          onChange={handleChange}
          theme="snow"
          placeholder="Write something amazing..."
          className="custom-quill"
        />
    </Container>
  );
};

export default EditorComponent;
