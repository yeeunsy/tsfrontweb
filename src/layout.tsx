import { Link, Outlet, Route, Routes } from "react-router-dom"
import GroupBuying from "./pages/groupbuying"

const Layout = () => {

    const description: string[] = [
        'milk and honey',
        'im Penguin!',
        'cup of tea :D',
        'dear cup'
    ]
    return (
        <>
            <div className="mainHome">
                <div className="bnSmr">
                    <img src={'https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} className="bnImg">
                    </img>
                </div>

                <GroupBuying />
                
            </div>
        </>
    )
}

export default Layout