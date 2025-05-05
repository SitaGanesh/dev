import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import io from "socket.io-client";
import axios from "axios";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";
const EXECUTOR_URL = import.meta.env.VITE_EXECUTOR_URL || "http://localhost:8000";

const socket = io(SOCKET_URL);

const CodeEditor = ({ roomId, onClose, onPost }) => {
  const [output, setOutput] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);
  const [codeValue, setCodeValue] = useState("");
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    if (!roomId) return;

    socket.emit("joinRoom", roomId);

    const handleCodeUpdate = (newCode) => {
      const editor = editorRef.current;
      if (!editor) return;

      if (newCode !== editor.getValue()) {
        editor.setValue(newCode);
        setCodeValue(newCode);
      }
    };

    socket.on("codeUpdate", handleCodeUpdate);
    return () => socket.off("codeUpdate", handleCodeUpdate);
  }, [roomId]);

  const handleRunCode = async () => {
    const code = editorRef.current?.getValue() ?? codeValue;
    setCodeValue(code);
    setOutput("Running code...");
    try {
      const res = await axios.post(`${EXECUTOR_URL}/run`, {
        code,
        language: "python",
      });
      const { output: result, error } = res.data;
      setOutput(error || result || "No output");
    } catch (err) {
      setOutput("Error:\n" + (err?.response?.data?.error || err.message));
    }
  };
  const handleSubmitPost = (postDetails) => {
    const code = (codeValue || editorRef.current?.getValue() || "").trim();
    if (!code) {
      alert("Please write some code before posting!");
      return;
    }

    onPost({
      ...postDetails,
      code,
      output,
      language: "python",
      date: new Date().toLocaleString(),
    });
    setShowPostForm(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-end mb-2">
        <button
          className="text-gray-600 text-xl font-bold hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {!showPostForm ? (
        <>
          <div className="flex mb-4 space-x-5">
            <span className="px-4 py-2 rounded-md border bg-white text-gray-700">
              Language: python
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handleRunCode}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Run Code
              </button>
              <button
                onClick={() => setShowPostForm(true)}
                className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Post
              </button>
            </div>
          </div>

          <div className="flex-1 border rounded-xl shadow overflow-hidden mb-4">
            <Editor
              height="80vh"
              language="python"
              theme="vs-dark"
              onMount={handleEditorDidMount}
              onChange={(value) => {
                setCodeValue(value);
                if (roomId) {
                  socket.emit("codeChange", { roomId, code: value });
                }
              }}
              options={{
                fontSize: 14,
                automaticLayout: true,
                minimap: { enabled: false },
              }}
            />
          </div>

          <div className="mt-4 p-4 border rounded-xl bg-gray-800 text-white h-32 overflow-auto">
            <pre>{output}</pre>
          </div>
        </>
      ) : (
        <PostForm onSubmit={handleSubmitPost} onCancel={() => setShowPostForm(false)} />
      )}
    </div>
  );
};

export default CodeEditor;

// PostForm component
const PostForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [explanation, setExplanation] = useState("");

  const handlePost = () => {
    if (!title.trim()) return alert("Title required");
    onSubmit({ title, tags: tags.split(",").map(tag => tag.trim()), explanation });
  };

  return (
    <div className="space-y-4 p-4 rounded-lg border shadow-md bg-white max-w-xl mx-auto">
      <h2 className="text-xl font-semibold">Create Post</h2>

      <input
        type="text"
        placeholder="New post title here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="text"
        placeholder="Add up to 4 tags..."
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        placeholder="Write your explanation here..."
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        className="w-full border px-3 py-2 rounded h-32"
      />

      <div className="flex space-x-2">
        <button onClick={handlePost} className="bg-blue-500 text-white px-4 py-2 rounded">
          Publish
        </button>
        <button onClick={onCancel} className="border px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};
