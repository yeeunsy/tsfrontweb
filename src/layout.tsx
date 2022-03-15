import { Link, Outlet, Route, Routes } from "react-router-dom"
import ImgBanner from './imgBanner'
import img1 from './img/img1.jpg'

const Layout = () => {
    return (
        <div className="mainHome">
            <div className="bnSmr">
                <img src={img1} className="bnImg">
                </img>
            </div>
            <div className="prList">
                <div className="">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text"><Link to='/'>12,000</Link></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text"><Link to='/'>20,000</Link></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">asdadsasdwasdwasda</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">awdsdawdsawdsawdwsa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout