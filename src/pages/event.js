import {  Outlet } from "react-router-dom";

function Event(){
    return (
        <div>
            <p>오늘의 이벤트</p>
            <Outlet></Outlet>
        </div>
    )
}
export default Event;