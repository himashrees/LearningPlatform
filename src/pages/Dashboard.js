// import React from 'react';
// import { Routes, Route, Link, useLocation } from 'react-router-dom';
// import Resources from './Resources';
// import Recommendations from './Recommendations';
// import Feedback from './Feedback';
// import AiAssistant from './AiAssistant';
// import DrawingBoard from './DrawingBoard';  
// import './Dashboard.css';

// function Dashboard() {
//   const location = useLocation();

//   // Show AiAssistant and DrawingBoard only on exact '/dashboard' path
//   const isDashboardMain = location.pathname === '/dashboard' || location.pathname === '/dashboard/';

//   return (
//     <div className="dashboard">
//       <nav className="navbar">
//         <h1>Learning Path</h1>
//         <div className="nav-links">
//           <Link to="resources">Resources</Link>
//           <Link to="recommendations">Recommendations</Link>
//           <Link to="feedback">Feedback</Link>
//         </div>
//       </nav>

//       <div className="content" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         {/* Left: Route content */}
//         <div style={{ flex: 1, minWidth: '300px', minHeight: '400px' }}>
//           <Routes>
//             <Route path="resources" element={<Resources />} />
//             <Route path="recommendations" element={<Recommendations />} />
//             <Route path="feedback" element={<Feedback />} />
//             <Route
//               path="/"
//               element={
//                 <div style={{ padding: '20px', color: '#aaa' }}>
//                   <h2>Welcome to Learning Path</h2>
//                   <p>Select a menu item to get started.</p>
//                 </div>
//               }
//             />
//           </Routes>
//         </div>

//         {/* Right/Middle: Drawing board - only on dashboard main */}
//         {isDashboardMain && (
//           <div style={{ flex: 1, minWidth: '300px' }}>
//             <DrawingBoard />
//           </div>
//         )}
//       </div>

//       {/* AiAssistant - only on dashboard main */}
//       {isDashboardMain && <AiAssistant />}
//     </div>
//   );
// }

// export default Dashboard;


import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Resources from './Resources';
import Recommendations from './Recommendations';
import Feedback from './Feedback';

import DrawingBoard from './DrawingBoard';
import MentalWellness from './MentalWellness'; // ✅ New import
import './Dashboard.css';
import FocusGames from './FocusGames';
import FocusQuiz from './FocusQuiz';

function Dashboard() {
  const location = useLocation();

  // Show AiAssistant and DrawingBoard only on exact '/dashboard' path
  const isDashboardMain = location.pathname === '/dashboard' || location.pathname === '/dashboard/';

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h1>Learning Path</h1>
        <div className="nav-links">
          <Link to="resources">Resources</Link>
          <Link to="recommendations">Recommendations</Link>
          <Link to="feedback">Feedback</Link>
        </div>
      </nav>

      <div className="content" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Left Panel */}
        <div style={{ flex: 1, minWidth: '300px', minHeight: '400px' }}>
          <Routes>
            <Route path="resources" element={<Resources />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="feedback" element={<Feedback />} />
            <Route
              path="/"
            
            />
          </Routes>

          {/* Mental Wellness Panel */}
          {isDashboardMain && <MentalWellness />}
           {isDashboardMain && <FocusGames />}

        </div>

        {/* Drawing Board on Main Dashboard */}
        {isDashboardMain && (
          <div style={{ flex: 1, minWidth: '300px' }}>
            <DrawingBoard />
            <FocusQuiz />
          </div>
        )}
      </div>

      {/* AI Assistant on Main Dashboard */}
      {/* {isDashboardMain && <AiAssistant />} */}
    </div>
  );
}

export default Dashboard;
