import React,{useState} from 'react';
import Sidebar from './SideBar/Sidebar';
import Main from './Main/Main';
import Discussion from './Discussion/Discussion';
import CodeEditor from './SideBar/CodeEditor/CodeEditor';

const Body = () => {
    const [activeRoomId, setActiveRoomId] = useState(null);
    return (
        <>
            <div className="flex flex-1 bg-gray-100 overflow-hidden">
                <div className="flex flex-row bg-gray-100 w-full overflow-x-auto">

                    {/* Sidebar (Left) */}
                    <aside className="w-[220px] min-w-[200px]  p-4 overflow-y-auto hidden md:block">
                        <Sidebar />
                    </aside>
                    {/* Main Content (Middle) */}
                    <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
                        <Main />
                    </main>
                    
                    {/* Discussion Bar (Right) */}
                    <aside className="w-[260px] min-w-[240px] bg-gray-100 p-4 overflow-y-auto mt-10 hidden lg:block">
                    <Discussion onJoinRoom={setActiveRoomId} />
                    {activeRoomId && <CodeEditor roomId={activeRoomId} />}
                    </aside>

                </div>
            </div>
        </>
    );
};

export default Body;
