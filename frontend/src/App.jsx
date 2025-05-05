import './App.css';
import CodeEditorWrapper from './components/Body/SideBar/CodeEditor/CodeEditorWrapper';
import Project from './components/Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


function App() {
  const [posts, setPosts] = useState(() => {
    // initialize from localStorage for persistence
    const stored = localStorage.getItem('codePosts');
    return stored ? JSON.parse(stored) : [];
  });

  const handleAddPost = (newPost) => {
    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem('codePosts', JSON.stringify(updated));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Project posts={posts} />} />
        <Route
          path="/code-editor/"
          element={<Navigate to={`/code-editor/${crypto.randomUUID()}`} replace />}
        />
        <Route path="/code-editor/:roomId" element={<CodeEditorWrapper onPost={handleAddPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
