import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import New from '../../../assets/sign.png';
const Discussion = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const generateRoomId = () => {
    const id = Math.floor(1000 + Math.random() * 9000).toString();
    alert(`Share this code with friends: ${id}`);
    navigate(`/code-editor/${id}`);
  };

  const handleJoin = () => {
    if (!roomId.trim()) return alert("Please enter a code");
    navigate(`/code-editor/${roomId.trim()}`);
  };

  return (
    <aside className="hidden lg:flex flex-col bg-white border-l border-gray-200 h-full pt-5 px-4 mt-10 rounded-md shadow-sm z-20">
      <h2 className="text-lg font-semibold mb-4">Active discussions</h2>
      <div className="mb-6 space-y-3">
        <button
          onClick={generateRoomId}
          className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Create Code Share Room
          <img src={New} alt="editor" width={24} height={24} />

        </button>
        <div>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter shared 4-digit code"
            className="w-full border px-3 py-2 rounded mb-2"
          />
          <button
            onClick={handleJoin}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Done
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto space-y-2">
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Redis Lost. Or did they?!
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Add MCP to Any React App in Under 10 Minutes
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          What was your win this week?!
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Redis Lost. Or did they?!
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Add MCP to Any React App in Under 10 Minutes
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          What was your win this week?!
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Redis Lost. Or did they?!
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Add MCP to Any React App in Under 10 Minutes
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          What was your win this week?!
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Redis Lost. Or did they?!
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          Add MCP to Any React App in Under 10 Minutes
        </div>
        <div className="bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
          What was your win this week?!
        </div>
      </div>
    </aside>
  );
};

export default Discussion;
