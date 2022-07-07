import {Link} from 'react-router-dom';


function Navbar() {
    return(
        <div className="bg-light p-2">
        <div className="row">
            <div className="col-4">
                <h4><Link to={"/"} className="text-decoration-none text-dark">Ecommerce</Link></h4>
            </div>
        <div className="col-4">
            Hi, User!
        </div>
        <div className="col-4">
            <button className="btn btn-danger">LogOut</button>
        </div>
        </div>

            
        </div>
    )
}

export default Navbar;