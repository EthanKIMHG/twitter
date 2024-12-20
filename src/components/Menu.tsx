import { useNavigate } from "react-router-dom"
import { FaHome, FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
export default function MenuList () {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer__grid">
        <button type="button" onClick={() => navigate("/")}>
          <FaHome />
          Home
        </button>
        <button type="button" onClick={() => navigate("/profile")}>
          <FaUserCircle />
          Profile
        </button>
        <button type="button" onClick={() => navigate("/")}>
          <MdLogout />
          Logout
          </button>
      </div>
    </div>
  )
}
