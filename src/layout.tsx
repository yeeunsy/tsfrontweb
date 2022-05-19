import { Link, Outlet, Route, Routes } from "react-router-dom"

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
                    
                </div>
            </div>
        </>
    )
}

export default Layout