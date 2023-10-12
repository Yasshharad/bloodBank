import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PendingRequests from './components/PendingRequests';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/pending-requests">Pending Requests</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/pending-requests" element={PendingRequests} />
                    {/* Add more routes for other components/pages */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
