import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

import { useState } from 'react';


const WebNavbar = () => {

    const [clicked1, setClicked1] = useState(false);
    const handleMouseDown1 = () => {
        setClicked1(true);
    };
    const handleMouseUp1 = () => {
        setClicked1(false);
    };
    const [clicked2, setClicked2] = useState(false);
    const handleMouseDown2 = () => {
        setClicked2(true);
    };
    const handleMouseUp2 = () => {
        setClicked2(false);
    };

    const [clicked3, setClicked3] = useState(false);
    const handleMouseDown3 = () => {
        setClicked3(true);
    };
    const handleMouseUp3 = () => {
        setClicked3(false);
    };

    const [clicked4, setClicked4] = useState(false);
    const handleMouseDown4 = () => {
        setClicked4(true);
    };
    const handleMouseUp4 = () => {
        setClicked4(false);
    };

    const [clicked5, setClicked5] = useState(false);
    const handleMouseDown5 = () => {
        setClicked5(true);
    };
    const handleMouseUp5 = () => {
        setClicked5(false);
    };

    const { userToken, logout, userId } = useUserContext();

    const navigate = useNavigate();
    return (
        <div className="bg-[#FFFBFB]">
            <div className='bg-[#FF5880] w-screen '>
                <h1 className='text-sm sm:text-md text-white p-2  italic '> your occasion, our profession</h1>
            </div>

            <Navbar expand="lg" className="bg-body primary p-0 bg-[#FFFBFB] mx-10">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate("/")}>
                        {/* TheEvent <TheaterComedyIcon /> */}
                        <Nav.Link onClick={() => { navigate("/") }} > <img src="assets/mainlogo-bgremoved2.png" alt="logo" className="h-12 object-contain scale-100 sm:scale-150 cursor-pointer w-30 " /> </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="navmain ">
                        <Nav
                            className="mr-5 gap-5"
                            style={{ maxHeight: "200px" }}
                            navbarScroll
                        >
                            <Nav.Link className="font-semibold  hover:text-[#FF5880] " onClick={() => navigate("/")}>Home</Nav.Link>
                            <Nav.Link className="font-semibold  hover:text-[#FF5880] " onClick={() => navigate("/services")}>Services</Nav.Link>
                            <Nav.Link className="font-semibold  hover:text-[#FF5880] capitalize" onClick={() => navigate("/occasionhubs")}>Occasion Hubs</Nav.Link>
                            <Nav.Link className="font-semibold  hover:text-[#FF5880] " onClick={() => navigate("/contactus")}>ContactUs</Nav.Link>
                        </Nav>

                        <Dropdown>
                            <Dropdown.Toggle
                                // style={{backgroundColor:"#FF5880" , border:"none", focus:{border:}}}
                                variant="secondary"
                                id="dropdown-basic"
                                className="username bg-[#FF5880] border-none mb-6 sm:mb-0"
                            >
                                User &nbsp;
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {userToken ? (
                                    <>
                                        <Dropdown.Item
                                            onMouseDown={handleMouseDown3}
                                            onMouseUp={handleMouseUp3}
                                            onClick={() => navigate("/profile")}
                                            style={{ backgroundColor: clicked3 ? "#FF5880" : "white", color: clicked3 ? "white" : "black", fontSize: "16px" }}
                                        >
                                            Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onMouseDown={handleMouseDown5}
                                            onMouseUp={handleMouseUp5}
                                            onClick={() => navigate(`/mybookings/${userId}`)}
                                            style={{ backgroundColor: clicked5 ? "#FF5880" : "white", color: clicked5 ? "white" : "black", fontSize: "16px" }}
                                        >
                                            My Bookings
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onMouseDown={handleMouseDown4}
                                            onMouseUp={handleMouseUp4}
                                            onClick={() => {
                                                logout();
                                                navigate("/login")
                                            }}
                                            style={{ backgroundColor: clicked4 ? "#FF5880" : "white", color: clicked4 ? "white" : "black", fontSize: "16px" }}
                                        >
                                            Logout
                                        </Dropdown.Item>
                                    </>
                                ) : (
                                    <>
                                        <Dropdown.Item
                                            onMouseDown={handleMouseDown1}
                                            onMouseUp={handleMouseUp1}
                                            onClick={() => navigate("/login")}
                                            style={{ backgroundColor: clicked1 ? "#FF5880" : "white", color: clicked1 ? "white" : "black", fontSize: "16px" }}
                                        >
                                            Login
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onMouseDown={handleMouseDown2}
                                            onMouseUp={handleMouseUp2}
                                            onClick={() => navigate("/signup")}
                                            style={{ backgroundColor: clicked2 ? "#FF5880" : "white", color: clicked2 ? "white" : "black", fontSize: "16px" }}
                                        >
                                            Register
                                        </Dropdown.Item>
                                    </>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default WebNavbar