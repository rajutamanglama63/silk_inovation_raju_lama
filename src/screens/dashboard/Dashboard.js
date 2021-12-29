import './dashboard.css'

import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard = () => {
    const auth = useSelector(state => state.auth);
    return (
        <div>
            <Navbar />
            <div className="dashboard_content">
                <Sidebar />
                
            </div>
        </div>
    )
}

export default Dashboard
