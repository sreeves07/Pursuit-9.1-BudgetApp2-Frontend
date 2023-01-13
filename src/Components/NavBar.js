import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to="/budget">Budget</Link>
            </h1>
            <button>
                <Link to="/budget/new">Create a new Transaction</Link>
            </button>
        </nav>
    );
};

export default NavBar;