import './sidebar.css'
import {Home, AccountBalance, AccountBalanceWalletOutlined, PersonOutline, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <ul className="sidebar_list">
                    <li className="sidebar_list_item">
                        <Home className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Home</span>
                    </li>
                    <li className="sidebar_list_item">
                        <AccountBalance className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Transactions</span>
                    </li>
                    <li className="sidebar_list_item">
                        <AccountBalanceWalletOutlined className="sidebar_icon" />
                        <span className="sidebar_list_item_name">My wallet</span>
                    </li>
                    <li className="sidebar_list_item">
                        <PersonOutline className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Account</span>
                    </li>
                    <li className="sidebar_list_item">
                        <Bookmark className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Bookmarks</span>
                    </li>
                    <li className="sidebar_list_item">
                        <HelpOutline className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Questions</span>
                    </li>
                    <li className="sidebar_list_item">
                        <Event className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Event</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
