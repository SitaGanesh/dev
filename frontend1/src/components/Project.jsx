import Header from "./Header/Header";
import Body from "./Body/Body";

const Project = () => {
    return (
      <div>
        <Header />
        <Body />
        {/* <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Posted Projects</h2>
          {posts.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            posts.map((post, idx) => (
              <div key={idx} className="border p-4 rounded mb-2">
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.explanation}</p>
                <p className="text-sm text-gray-500">Tags: {post.tags.join(", ")}</p>
                <pre className="bg-gray-100 p-2 mt-2 overflow-auto">{post.code}</pre>
                <div className="mt-2 bg-gray-200 p-2">
                  <strong>Output:</strong>
                  <pre>{post.output}</pre>
                </div>
              </div>
            ))
          )}
        </div> */}
      </div>
    );
  };
  
export default Project;
  