import {Link , useNavigate} from "react-router-dom";
import "../css/AdminNavbarComponent.css";
import { useUserAuth } from "../context/UserAuthContext";


const NavbarComponent=(props)=>{
    const { logOut, user } = useUserAuth();
    let navigate = useNavigate();


    const handleLogout = async () => {
        try {
            await logOut();
            window.location.href = '/login';
        } catch(err) {
            console.log(err.message)
        }
    }
    

    const openManager=()=>{
        let x = document.getElementById("navManager");
        let y = document.getElementById("navInformation");
        if (window.getComputedStyle(x).display === "none") {
          x.style.display = "block";
          y.style.display = "none";
        } else {
          x.style.display = "none";
        }
    }
    const openInformation=()=>{
      let x = document.getElementById("navManager");
      let y = document.getElementById("navInformation");
        if (window.getComputedStyle(y).display === "none") {
          y.style.display = "block";
          x.style.display = "none";
        } else {
          y.style.display = "none";
        }
    }

    return(
        <nav>
            {/* { getRole() === 'admin' && (
                <ul className="nav justify-content-end" id="nav1">
                    <li className="nav-item pr-3 pb-3"><Link to="/admin/home" className="nav-link" target="_parent">หน้าแรก</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link onClick={onlogout} className="nav-link" target="_parent">ระบบจัดการ</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link onClick={onlogout} className="nav-link" target="_parent">ข้อมูลทั่วไป</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">Dashboard</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link onClick={onlogout} className="nav-link" target="_parent">ออกจากระบบ</Link></li>
                </ul>
                )
            } */}
          
            <ul className="nav justify-content-end" id="nav">
                    <li className="nav-item pr-3 pb-3"><Link to="/homeAdmin" className="nav-link" target="_parent">หน้าแรก</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link onClick={()=>openManager()} className="nav-link">ระบบจัดการ</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link onClick={()=>openInformation()} className="nav-link">ข้อมูลทั่วไป</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">Dashboard</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link onClick={handleLogout} className="nav-link" target="_parent">ออกจากระบบ</Link></li>
            </ul>

            <ul className="nav flex-column font1" id="navManager">
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">ระบบจัดการคิว</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">ระบบนัดหมาย</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link to="/timeTableAdmin" className="nav-link" target="_parent">เวลาเข้าทำการ</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">กิจกรรม</Link></li>
                  
            </ul>

            <ul className="nav flex-column font1" id="navInformation">
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">ข้อมูลทั่วไป</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">ข้อเสนอแนะ</Link></li>
                    <li className="nav-item pr-3 pb-3"><Link to="#" className="nav-link" target="_parent">คู่มือ</Link></li>
                  
            </ul>
            



        </nav>
    );
}

export default NavbarComponent;