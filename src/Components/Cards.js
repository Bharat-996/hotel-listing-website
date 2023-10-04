import React from 'react'
import "./Cards.css"
import {PiBuildingsFill,PiArrowsOutCardinalLight} from "react-icons/pi"
import{LiaBedSolid} from "react-icons/lia"
import{BiBath, BiSolidHeartCircle} from "react-icons/bi"
import {CiLocationOn} from "react-icons/ci"

function Cards() {
  return (
    <>
<div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">

            <div className="col">
                <div className="card">
                <div className="img-btn">
                <button type="button" class="btn btn-light">For Rent</button>
                    </div>
                <div className="img-icon">
                    <BiSolidHeartCircle size= {40}/>
                    </div>
                    <img src="https://ap.rdcpix.com/1e8aaf97b57be5958cfaee10a9d74ac0l-m2399453411od-w480_h360_x2.webp?w=640&q=75" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className='card-loc '><CiLocationOn /> 418 Central Park W</p>
                        <h5 className="card-title"> BKNY TROY AVENUE REALTY CORP</h5>
                        <div className="card-features">
                            <p> <PiBuildingsFill/><br/>3 Rooms</p>
                            <p> <LiaBedSolid/><br/>2 Bed</p>
                            <p><BiBath/><br/> 2 Bath</p>
                            <p><PiArrowsOutCardinalLight/><br/> 732 sqft</p>
                        </div>
                    </div>
                    <div className=" mb-5 d-flex justify-content-around ">
                    <h4>1190$ <sub>/ month</sub></h4>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <div className="img-btn">
                <button type="button" class="btn btn-light">For Sale</button>
                    </div>
                <div className="img-icon">
                    <BiSolidHeartCircle size={40}/>
                    </div>
                    <img src="https://ap.rdcpix.com/a20f8a279246cf57c3b4a6c2861a11ecl-m333089519od-w480_h360_x2.webp?w=640&q=75" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className='card-loc '><CiLocationOn /> 5E 64th St, New York</p>
                        <h5 className="card-title">Sotheby's International Realty </h5>
                        <div className="card-features">
                        
                            <p> <PiBuildingsFill/><br/>8 Rooms</p>
                            <p> <LiaBedSolid/><br/>7 Bed</p>
                            <p><BiBath/><br/> 7 Bath</p>
                            <p><PiArrowsOutCardinalLight/><br/> 14,175 sqft</p>
                        </div>
                    </div>
                    <div className=" mb-5 d-flex justify-content-around ">
                    <h4>1890$ <sub>/ month</sub></h4>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card">
                <div className="img-btn">
                <button type="button" class="btn btn-light">For Rent</button>
                    </div>
                <div className="img-icon">
                    <BiSolidHeartCircle size={40}/>
                    </div>
                    <img src="https://ap.rdcpix.com/7c78f0f826bc3033d7ca227782a50555l-m2542871826od-w480_h360_x2.webp?w=640&q=75" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className='card-loc '><CiLocationOn /> 5 Van Tuyl St, Staten Island</p>
                        <h5 className="card-title">GOLDEN MINE GROUP</h5>
                        <div className="card-features">
                        
                            <p> <PiBuildingsFill/><br/>5 Rooms</p>
                            <p> <LiaBedSolid/><br/>6 Bed</p>
                            <p><BiBath/><br/> 3 Bath</p>
                            <p><PiArrowsOutCardinalLight/><br/> 7000 sqft</p>
                        </div>
                    </div>
                    <div className=" mb-5 d-flex justify-content-around ">
                    <h4>1850$ <sub>/ month</sub></h4>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card">
                <div className="img-btn">
                <button type="button" class="btn btn-light">For Sale</button>
                    </div>
                <div className="img-icon">
                    <BiSolidHeartCircle size={40}/>
                    </div>
                    <img src="https://ap.rdcpix.com/f5371c62e2352bb9879f4c1c1e250f72l-m4222580783od-w1024_h768_x2.webp" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className='card-loc '><CiLocationOn /> 57 Middle Loop Rd, Staten Island</p>
                        <h5 className="card-title">RichMond Country Staten Island</h5>
                        <div className="card-features">
                        
                            <p> <PiBuildingsFill/><br/>3 Rooms</p>
                            <p> <LiaBedSolid/><br/>4 Bed</p>
                            <p><BiBath/><br/> 1 Bath</p>
                            <p><PiArrowsOutCardinalLight/><br/> 732 sqft</p>
                        </div>
                    </div>
                    <div className=" mb-5 d-flex justify-content-around ">
                    <h4>1690$ <sub>/ month</sub></h4>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card">
                <div className="img-btn">
                <button type="button" class="btn btn-light">For Rent</button>
                    </div>
                <div className="img-icon">
                    <BiSolidHeartCircle size={40}/>
                    </div>
                    <img src="https://ap.rdcpix.com/3a467dd9d79d42c3a33c7c8f5db2b646l-m854539955od-w480_h360_x2.webp?w=640&q=75" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className='card-loc '><CiLocationOn /> 1459 Waring Ave, Bronx, </p>
                        <h5 className="card-title">Elite Real Estate Group 1 Llc</h5>
                        <div className="card-features">
                        
                            <p> <PiBuildingsFill/><br/>3 Rooms</p>
                            <p> <LiaBedSolid/><br/>3 Bed</p>
                            <p><BiBath/><br/> 2 Bath</p>
                            <p><PiArrowsOutCardinalLight/><br/> 1675 sqft</p>
                        </div>
                    </div>
                    <div className=" mb-5 d-flex justify-content-around ">
                    <h4>1490$ <sub>/ month</sub></h4>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card">
                    <div className="img-btn">
                    <button type="button" class="btn btn-light rounded">For Rent</button>
                    </div>
                    <div className="img-icon">
                    <BiSolidHeartCircle size={40}/>
                    </div>
                    <img src="https://ap.rdcpix.com/ccf501f2758ca8d4df0ad18347cb630fl-m3009393035od-w480_h360_x2.webp?w=640&q=75" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className='card-loc '><CiLocationOn /> 96 Fordham St, Bronx</p>
                        <h5 className="card-title">Margo DeSantis Real Estate</h5>
                        <div className="card-features">

                            <p><PiBuildingsFill/><br/>3 Rooms</p>
                            <p> <LiaBedSolid/><br/>5 bed</p>
                            <p><BiBath/><br/> 2 Bath</p>
                            <p><PiArrowsOutCardinalLight/><br/> 4622 sqft</p>
                        </div>
                    </div>
                    <div className=" mb-5 d-flex justify-content-around ">
                    <h4>1800$ <sub>/ month</sub></h4>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>



        </div>
    </div>
    </>
  )
}

export default Cards