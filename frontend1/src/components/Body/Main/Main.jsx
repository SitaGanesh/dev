import React, { useState, useEffect } from 'react';
import CodeEditor from '../SideBar/CodeEditor/CodeEditor';
import New from '../../../assets/sign.png';

const Main = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage on mount
  useEffect(() => {
    const storedPosts = localStorage.getItem('codePosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Save to localStorage when a post is submitted
  const handlePostSubmit = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('codePosts', JSON.stringify(updatedPosts));
    setShowEditor(false);
  };

  return (
    <section className="flex flex-col flex-1  bg-gray-100 h-full overflow-auto pt-20 px-4 md:px-8">
      {showEditor ? (
        <CodeEditor onClose={() => setShowEditor(false)} onPost={handlePostSubmit} />
      ) : (
        <>
          <div className="bg-white border mb-5 border-gray-300 rounded-md p-4 shadow-sm">
            <textarea
              className="w-full resize-none border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's on your mind?"
              aria-label="What's on your mind?"
              maxLength={256}
              rows={1}
              name="article[title]"
              id="article_title"
              style={{ height: "40px" }}
            ></textarea>

            <input
              value="status"
              type="hidden"
              name="article[type_of]"
              id="article_type_of"
            />
            <input
              value="1"
              type="hidden"
              name="article[published]"
              id="article_published"
            />
            <input
              value=""
              type="hidden"
              name="article[body_markdown]"
              id="article_body_markdown"
            />

            <div
              id="main-status-form-controls"
              className="flex justify-between items-center pt-3"
            >
              <div className="text-xs text-gray-500">
                <strong>Quickie Posts (beta)</strong> show up in the feed but not notifications or your profile —{" "}
                <a href="/new" className="text-blue-600 hover:underline">Open Full Editor</a>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-gray-500 pr-2 min-w-[65px] text-right">
                  <span id="main-status-form-char-count">0</span>/256
                </div>
                <input
                  type="submit"
                  name="commit"
                  value="Post"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-4 rounded-md"
                  data-disable-with="Post"
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowEditor(true)}
            className="mb-4 flex justify-center bg-green-500 text-white px-4 py-2 rounded"
          >
            + New Code Post
            <img src={New} alt="editor" width={30} height={30} />

          </button>
          <div className="flex gap-1 mt-4">

            <a
              href="/"
              data-feed-nav="discover"
              className="inline-block px-4 py-1 rounded-md bg-blue-100 text-blue-700 font-medium hover:bg-blue-200"
            >
              Discover
            </a>


            <a
              href="/"
              data-feed-nav="following"
              className="inline-block px-4 py-1 rounded-md text-slate-700 hover:bg-gray-100 font-medium"
            >
              Following
            </a>

          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-3">👋 DEV Challenges</h3>

            <a href="https://dev.to/devteam/join-the-amazon-q-developer-quack-the-code-challenge-3000-in-prizes-ng5?bb=227769" target="_blank">
              <img
                src="https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1st480lgb6z9kqsxlnwu.png"
                alt="Join Amazon Q Developer Challenge"
                className="w-full rounded-md"
              />
            </a>

            <h4 className="text-lg font-semibold text-slate-700 mt-4 mb-2">Build something fun!</h4>

            <a href="/devteam?bb=227769" className="flex items-center gap-3 mt-3 no-underline text-slate-800 hover:text-blue-600">
              <img
                src="https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg"
                alt="The DEV Team"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-base font-medium">The DEV Team</span>
            </a>
          </div>


          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 mb-4 mt-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                {post.language} | {post.date}
              </p>
              <div className="mb-2">
                <p className="text-sm text-gray-600 font-semibold mb-1">Code:</p>
                <pre className="bg-gray-900 text-green-200 p-2 rounded overflow-x-auto">
                  {post.code}
                </pre>
              </div>
              <p className="mb-2 text-gray-700">{post.explanation}</p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-2 bg-black text-white p-2 rounded h-24 overflow-auto">
                <pre>{post.output}</pre>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Main;
