import { Link } from "react-router-dom"


export const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <button>
                <Link to="/">Generator</Link>
            </button>
            <button>
                <Link to="/favorites">Favorites</Link>
            </button>
        </div>
    )
}