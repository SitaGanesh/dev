/* CodeEditorWrapper.jsx */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CodeEditor from './CodeEditor';

const CodeEditorWrapper = ({ onPost }) => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const handleClose = () => {
    navigate('/');
  };

  const handlePost = (postData) => {
    onPost(postData);
    navigate('/');
  };

  return (
    <CodeEditor
      roomId={roomId}
      onClose={handleClose}
      onPost={handlePost}
    />
  );
};

export default CodeEditorWrapper;
