import { Link, Outlet, Route, Routes } from "react-router-dom"

const Layout = () => {
    const imgs: string[] = [
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1647163640558-59590f58d407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1610140755238-fdce8f3be7a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1617076678956-502a1f4a021c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
    ]

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

                <div className="prLine">
                {imgs.map(v => 
                <div>
                    <div className="buyPr">
                        <Link to='/detailInfo' className="about">
                            <div className="prCard">
                                <img className="imgCard" src={v}></img>
                                <p>
                                    설명<br/>
                                    12,000
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>)}
                </div>
            </div>
        </>
    )
}

export default Layout