'use client'

import React, { useEffect, useState } from 'react'
import style from "@/app/styles/dashboard.module.css"
import { FaSearch, FaBell } from 'react-icons/fa';
import { TbCameraDown } from "react-icons/tb"
import { MdContentCopy } from "react-icons/md"
import { BiSolidLike } from "react-icons/bi"
import { AiFillSetting, AiFillDashboard, AiFillSchedule } from "react-icons/ai"

import { FiUsers } from "react-icons/fi"
import Piechart from '@/component/Piechart/Piechart';
import Linechart from '@/component/Linechart/Linechart';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const [data, setData] = useState(null)
    const session = useSession();
    console.log(session)
    var avat = "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
    if (session.status === "authenticated") {
        avat = session.data.user.image
    }

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/alldata');
            const responseData = await response.json();
           
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
         fetchData();

    }, [])
    return (
        <div className={style.container}>
            {data==null?<img src='https://cdn.dribbble.com/users/108183/screenshots/3284599/preloader-iii.gif' alt='loader'/>:<>
           
            <div className={style.box}>
                <div>
                    <div className={style.bord}>
                        <h1>Board.</h1>
                    </div>
                    <div className={style.dash}>
                        <AiFillDashboard />
                        <h1>Dashboard</h1>
                    </div>
                    <div className={style.fake}>
                        <MdContentCopy />
                        <h1>Transections</h1>
                    </div>
                    <div className={style.fake}>
                        <AiFillSchedule />
                        <h1>Schedules</h1>
                    </div>
                    <div className={style.fake}>
                        <FiUsers />
                        <h1>Users</h1>
                    </div>
                    <div className={style.fake}>
                        <AiFillSetting />
                        <h1>setting</h1>
                    </div>

                </div>
                <div className={style.contact}>
                    <p>Help</p>
                    <p>Contact us</p>

                </div>

            </div>
            <div className={style.boxl}>
                <div>
                    <nav className={style.navbar}>
                        <div>
                            <h1>Dashboard</h1>
                        </div>
                        <div>
                            <div className={style.input_container}>
                                <input type="text" placeholder='search...' />
                                <FaSearch className={style.search_icon} />
                            </div>
                            <div className={style.bell}>
                                <FaBell />
                            </div>
                            <div >
                                <img src={avat} alt="gggfd" className={style.avatar} />
                            </div>

                        </div>
                    </nav>

                    <div className={style.topcontainer}>
                        <div style={{ backgroundColor: "#DDEFE0" }}>
                            <div className={style.icons}><TbCameraDown /></div>
                            <p>Total revenue</p>
                            <h2>&#x24;{data.totalrevenue}</h2>
                        </div>
                        <div style={{ backgroundColor: "#F4ECDD" }}>
                            <div className={style.icons}><MdContentCopy /></div>
                            <p>Total transection</p>
                            <h2>{data.transection}</h2>
                        </div>
                        <div style={{ backgroundColor: "#EFDADA" }}>
                            <div className={style.icons}><BiSolidLike /></div>
                            <p>Total likes</p>
                            <h2>{data.like}</h2>
                        </div>
                        <div style={{ backgroundColor: "#DEE0EF" }}>
                            <div className={style.icons}><FiUsers /></div>
                            <p>total users</p>
                            <h2>{data.user}</h2>
                        </div>

                    </div>

                    {/* char start here */}
                    <div className={style.chartdiv}>
                        <h3>Activities</h3>
                        <select style={{ border: "none" }}>
                            <option value="">may-june 2021</option>
                            <option value="">jan-fab 2021</option>
                            <option value="">mar-april 2021</option>
                        </select>
                        <Linechart val={data.data[2]}/>

                    </div>
                    {/* pie chart */}
                    <div className={style.piediv}>

                        <div>
                            <div className={style.topcom}>
                                <h3>Top products</h3>
                                <div>
                                    <select style={{ border: "none" }}>
                                        <option value="">may-june 2021</option>
                                        <option value="">jan-fab 2021</option>
                                        <option value="">mar-april 2021</option>
                                    </select>

                                </div>

                            </div>
                            <Piechart val={data.data[2]}/>
                        </div>
                        <div className={style.meeting}>
                            <div className={style.meethead}>
                                <div className={style.schedulehead}>Today Schedules</div>
                                <div className={style.seeall}>See all &gt;</div>
                            </div>
                            <div className={style.firstmeet}>
                                <h1>Meeting with suppliers from kuta bali</h1>
                                <p>14.00-15.00</p>
                                <p>at sunset road,kuta bali</p>
                            </div>
                            <div className={style.secondmeet}>
                            <h1>Check operation at giga factory1</h1>
                                <p>18.00-20.00</p>
                                <p>at central jakarta</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </>}
        </div>
    )
}
export default Dashboard;
