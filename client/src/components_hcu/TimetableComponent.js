import {useEffect,useState} from "react";
import NavbarComponent from "../components_hcu/NavbarComponent";
import "../css/AdminTimeTableComponent.css";
import edit from "../picture/icon_edit.jpg";
import icon_delete from "../picture/icon_delete.jpg";

const TimetableComponent=(props)=>{

    const[timetable, setTimetable] = useState([])

    const [state,setState] = useState({
        addDay:"",
        timeStart:"",
        timeEnd:"",
        timeAppointmentStart:"",
        timeAppointmentEnd:"",
        numberAppointment:"",
        clinic:""

    })

    const{addDay, timeStart, timeEnd, timeAppointmentStart, timeAppointmentEnd, numberAppointment,clinic} = state

    const inputValue = name => event =>{
        setState({...state,[name]:event.target.value});
    }
   

    const [selectedCount, setSelectedCount] = useState(1);

    const handleSelectChange = () => {
      setSelectedCount(selectedCount + 1);
    };

    const submitForm=(e)=>{
        e.preventDefault();
        const clinic = 'general'
        console.log({addDay, timeStart, timeEnd, timeAppointmentStart, timeAppointmentEnd, numberAppointment,clinic})
        // เปลี่ยนตาม rounter ฝั่ง backend
        // สมมติไว้คือ /getTimeable/:clinnic
        // axios.post(`${process.env.REACT_APP_API}/timeable/add`, {addDay, timeStart, timeEnd, timeAppointmentStart, timeAppointmentEnd, numberAppointment})
        // .then(response=>{
        //     Swal.fire(
        //         'Succcess!',
        //         'บันทึกข้อมูลเรียบร้อย',
        //         'success'
        //       )
        //     setState({...state,addDay:"", timeStart:"", timeEnd:"", timeAppointmentStart:"", timeAppointmentEnd:"", numberAppointment:""});
        // }).catch(err=>{
        //     Swal.fire('แจ้งเตือน', err.response.data.error,'error')
            
        // })
        

    }
  
    
    const fetchData=()=>{
        // เปลี่ยนตาม rounter ฝั่ง backend
        // สมมติไว้คือ /getTimeable/:clinnic
        // axois.get(`${process.env.REACT_APP_API}/getTimeable/general`)
        // .then(response=>{
        //     setTimetable(response.data)
        // })
        // .catch(err=>alert(err));
    }
    

    useEffect(()=>{
        document.title = 'Health Care Unit';
        // fetchData()
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer); 
        }
    },[])

    const [today, setDate] = useState(new Date()); 
    const locale = 'en'

    
    function formatNumber(num) {
        return num < 10 ? "0" + num : num.toString();
    }

    const month = formatNumber(today.getMonth()+1);
    const year = formatNumber(today.getFullYear());
    const date = formatNumber(today.getDate());
    const day = today.toLocaleDateString(locale, { weekday: 'long' });

    const hour = formatNumber(today.getHours());
    const minute = formatNumber(today.getMinutes());
    const seconds = formatNumber(today.getSeconds());

    
    const [isChecked, setIsChecked] = useState(true);
      
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const openAddtimeable=()=>{
        let x = document.getElementById("Addtimeable");
        if (window.getComputedStyle(x).display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
          setState({...state,addDay:"", timeStart:"", timeEnd:"", timeAppointmentStart:"", timeAppointmentEnd:"", numberAppointment:"", clinic:""})
        }
    }

    

 
    return(
        <div> 
            <NavbarComponent/>
            <div className="topicBox">
                <div></div>
                <div>
                    <h1 className="colorPrimary-800 center">ช่วงเเวลาเข้าทำการแพทย์</h1>
                </div>
                <div className="dateTime">
                    <p className="colorPrimary-800">Date: {day} {date}/{month}/{year}</p>
                    <p className="colorPrimary-800">Time: {hour}:{minute}:{seconds}</p>
                </div>
            </div>
            <div className="clinic">
                <a href="/" target="_parent" id="select">คลินิกทั่วไป</a>
                <a href="/" target="_parent" >คลินิกเฉพาะทาง</a>
                <a href="/" target="_parent" >คลินิกกายภาพ</a>
                <a href="/" target="_parent" >คลินิกฝั่งเข็ม</a>
            </div>
   
            <div className="system">
                <div className="system-item">
                    <div className="system-top">
                        <p className="colorPrimary-800 system-top-item">ช่วงเวลาเข้าทำการแพทย์</p>
                        <button className="system-top-item" onClick={()=>openAddtimeable()}>เพิ่มเวลา +</button>
                    </div>
                    <div className="system-detail">
                        <p>วันจันทร์</p>
                        {timetable.filter((timetable) => timetable.day === "monday").map((timetable,index)=>(
                            <div className="row" >
                                <div className="card">
                                    <a href={`/timetable/${timetable._id}`} className="card-detail colorPrimary-800">
                                        <p>{timetable.timeStart} - {timetable.timeEnd}</p>
                                        <p className="textBody-big">เปิดให้นัดหมาย {timetable.timeAppointmentStart} - {timetable.timeAppointmentEnd} </p>
                                        <p className="textBody-big">จำนวน {timetable.numberAppointment} คิว</p>
                                    </a>
                                    <div className="card-funtion">
                                        <label className={`toggle-switch ${isChecked? 'checked' : ''}`}>
                                            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                            <div className="slider"></div>
                                        </label>
                                        <img src={edit} className="icon"/>
                                        <img src={icon_delete} className="icon"/>
                                    </div>
                                </div>
                            </div>

                        ))}
                        <div className="row" >
                            <div className="card">
                                <a href={`/timetable/${timetable._id}`} className="card-detail colorPrimary-800">
                                    <p>{timetable.timeStart} - {timetable.timeEnd}  09:00 - 12:00</p>
                                    <p className="textBody-big">เปิดให้นัดหมาย {timetable.timeAppointmentStart} - {timetable.timeAppointmentEnd} </p>
                                    <p className="textBody-big">จำนวน {timetable.numberAppointment} คิว</p>
                                </a>
                                <div className="card-funtion">
                                <label className={`toggle-switch ${isChecked? 'checked' : ''}`}>
                                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                    <div className="slider"></div>
                                </label>
                                    <img src={edit} className="icon"/>
                                    <img src={icon_delete} className="icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="card">
                                <a href={`/timetable/${timetable._id}`} className="card-detail colorPrimary-800">
                                    <p>{timetable.timeStart} - {timetable.timeEnd}  09:00 - 12:00</p>
                                    <p className="textBody-big">เปิดให้นัดหมาย {timetable.timeAppointmentStart} - {timetable.timeAppointmentEnd} </p>
                                    <p className="textBody-big">จำนวน {timetable.numberAppointment} คิว</p>
                                </a>
                                <div className="card-funtion">
                                <label className={`toggle-switch ${isChecked? 'checked' : ''}`}>
                                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                    <div className="slider"></div>
                                </label>
                                    <img src={edit} className="icon"/>
                                    <img src={icon_delete} className="icon"/>
                                </div>
                            </div>
                        </div>
                        <p>วันอังคาร</p>
                        <p>วันพุธ</p>
                        <p>วันพฤหัสบดี</p>
                        <p>วันศุกร์</p>
                    </div>
                </div>
        
                <div className="system-item border-L">
                    <div id="Addtimeable">
                    <form onSubmit={submitForm}>
                        <div className="system-top">
                            <button onClick={()=>openAddtimeable()} className="colorPrimary-800 system-top-item" id="backTopic">❮ เพิ่มเวลาเข้าทำการแพทย์</button>
                        </div>
                        <p>คลินิก <p className="textBody-big">คลินิกทั่วไป</p></p>
                        <div>
                            <label className="textBody-big2 colorPrimary-800">วัน</label>
                            <select name="Day"   value={addDay} onChange={(e) => {inputValue("addDay")(e);handleSelectChange();}} className={selectedCount >= 2 ? 'selected' : ''}>
                                <option value="" disabled > กรุณาเลือกวัน </option>
                                <option value="monday">วันจันทร์</option>
                                <option value="tuesday">วันอังคาร</option>
                                <option value="wednesday">วันพุธ</option>
                                <option value="thursday">วันพฤหัสบดี</option>
                                <option value="friday">วันศุกร์</option>
                            </select>
                        </div>

                        <div>
                            <label className="textBody-big2 colorPrimary-800">ช่วงเวลาเปิดให้บริการ</label><br></br>
                            <input type="text" className="form-control timeable" value={timeStart} onChange={inputValue("timeStart")} placeholder="00:00"/>
                            <span> ถึง </span>
                            <input type="text" className="form-control timeable" value={timeEnd} onChange={inputValue("timeEnd")} placeholder="00:00"/>
                        </div>

                        <div>
                            <label className="textBody-big2 colorPrimary-800">ช่วงเวลาเปิดให้นัดหมาย</label><br></br>
                            <input type="text" className="form-control timeable" value={timeAppointmentStart} onChange={inputValue("timeAppointmentStart")} placeholder="00:00"/> 
                            <span> ถึง </span>
                            <input type="text" className="form-control timeable" value={timeAppointmentEnd} onChange={inputValue("timeAppointmentEnd")} placeholder="00:00"/>
                        </div>

                        <div>
                            <label className="textBody-big2 colorPrimary-800">จำนวคิว</label><br></br>
                            <input type="text" className="form-control timeable" value={numberAppointment} onChange={inputValue("numberAppointment")} placeholder="5"/> 
                            <span> คิว</span>
                            
                        </div>
                        <button onClick={()=>openAddtimeable()} className="btn-secondary" id="btn-systrm">กลับ</button>
                        <input type="submit" value="เพิ่มช่วงเวลา" className="btn-primary" id="btn-systrm"target="_parent"/>
                    </form>
                    </div>


                </div>
            </div>
          
        
       
        </div>
        
    );
}

export default TimetableComponent;