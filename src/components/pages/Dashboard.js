import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import app from "../../Config";
import { Dashboard } from "@mui/icons-material";

const DashBoard = () =>{
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        return <Link to='/login'/>
    }

    return (
        <div>
            <div className="container mt-5">
                <h1>Welcome</h1>
                <p>This is the dashboard, if you can see this you're logged in.</p>
                <button onClick={() => app.auth().signOut()} className='btn btn-danger'>Sign Out</button>
            </div>
        </div>

    )
}

export default Dashboard;