import React from 'react'
import { BrowserRouter as Router, Link,Route, Routes} from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.png'
import BudgetLine from './BudgetLine';
import MyRequest from './MyRequest';
import NewRequest from './NewRequest';
import RejectedRequest from './RejectedRequest';
import ApprovedRequest from './ApprovedRequest';
import AddNewBudget from './AddNewBudget';
import RegisterUser from './AddNewUser';
function Dashboard(){
    return <>
    <Router>
            <section>
                <div className="sidebar">
                    <div className="profile">
                        <div className="PictureName">
                            <img className='profilePicture' src={logo} alt="Profile"/>
                            <h3 className='personName'>Name</h3>
                        </div>
                        <h2 className='titleName'>IT Coordinator</h2>
                    </div>
                    <div className="components">
                        <ul>
                            <li><Link to='/'><i className="fa fa-money Cicon"></i> Budget Line</Link></li>
                            <li><Link to='/add-newbudget'><i className="fa fa-envelope-open-o Cicon"></i>Add New Budget Line</Link></li>
                            <li><Link to='/my-request'><i className="fa fa-envelope-open-o Cicon"></i>My Request</Link></li>
                            <li><Link to='/new-request'><i className="fa fa-plus-circle Cicon"></i>New Request</Link></li>
                            <li><Link to='/rejected-request'><i className="fa fa-times-circle-o Cicon"></i>Rejected Request</Link></li>
                            <li><Link to='/approved-request'><i className="fa fa-check Cicon"></i>Approved Request</Link></li>
                            <li><Link to='/add-user'><i className="fa fa-check Cicon"></i>Add User</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="RightSide-main">
                    <div className="departmentName">
                        <h2>Department Name</h2>
                    </div>
                    <div className="componentDisplay">
                        <Routes>
                            <Route path="/" element={<BudgetLine />} />
                            <Route path="/my-request" element={<MyRequest />} />
                            <Route path="/add-newbudget" element={<AddNewBudget />} />
                            <Route path="/new-request" element={<NewRequest />} />
                            <Route path="/approved-request" element={<ApprovedRequest />} />
                            <Route path="/rejected-request" element={<RejectedRequest />} />
                            <Route path="/add-user" element={<RegisterUser />} />
                        </Routes>
                    </div>
                </div>
            </section>
        </Router>
    </>
}
export default Dashboard;