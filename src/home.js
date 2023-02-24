import logo from './logo.png';
import bg1 from './bg1.png';
import bg11 from './bg11.png';
import bg2 from './bg2.png';
import bg22 from './bg22.png';
import down from './down.png';
import play from './play.png';
import eg1 from './eg1.png';
import eg2 from './eg2.png';
import user from './user.png';
import tor from './tor.png';
import home from './home.png';
import homer from './homer.png';
import left from './left.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';
import img9 from './img9.png';
import bath from './bath.png';
import bed from './bed.png';
import userpic from './userpic.png';
import vector1 from './Vector1.png';
// import vector2 from './Vector2.png';
import vector3 from './Vector3.png';
import vector4 from './Vector4.png';
import vector5 from './Vector5.png';
import vector6 from './Vector6.png';
import menu from './menu.png';


const Home = () => {
    return ( 
        <div className="">
            <div className=" navbar flex flex-row items-center py-10 px-8 lg:px-20 justify-between z-50 bg-transparent">
                <span className=" items-center flex flex-row space-x-1">
                    <img src={ logo } className=' w-[24px] lg:w-[32px]' alt="" />
                    <p className=' lg:text-2xl text-base font-bold font-lato text-[#015a01] mt-[5px]'>Home Haven</p>
                </span>
                <span className=" items-center space-x-10 hidden lg:flex flex-row font-lato font-normal text-black text-base z-50">
                    <p className=' font-bold'>How it Works</p>
                    <p className=''>Features</p>
                    <p className=''>About</p>
                </span>
                <button className=' px-3 py-2 bg-[#015a01] hidden lg:block rounded-[80px] text-white font-normal text-base z-50'>Contact Us</button>
                <img src={ menu } className=' block lg:hidden' alt="" />
            </div>
            <div className=' flex lg:hidden justify-center items-center'>
                <img src={ bg11 } alt="" />
            </div>
            <img src={ bg1 } className='hidden lg:block absolute right-0 top-0 -z-50 w-[50%] ' alt="" />
            <div className=' lg:px-20 px-0 mt-[21px] lg:mt-[82px] flex lg:block flex-col justify-center items-center'>
                <p className=' font-lato text-center lg:text-left font-bold text-black text-[20px] lg:text-[45px] flex items-center lg:leading-[60px]'>Let Us Help You Choose<br></br>The Best.</p>
                <p className=' font-lato font-normal text-black text-sm lg:text-base text-center lg:text-left mt-5 lg:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Nunc vulputate libero et velit<br></br> interdum, ac aliquet odio mattis.</p>
                <div className=' flex flex-row mt-6 space-x-3'>
                    <button className=' bg-[#015a01] py-3 px-5 text-white font-lato font-normal text-sm lg:text-base rounded-[80px] '>Learn More</button>
                    <span className=' flex flex-row items-center space-x-2'>
                        <button className='flex justify-center items-center lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-[50%] bg-[#defade]'>
                            <img src={ play } className=' w-[16px] lg:w-[20px]' alt="" />
                        </button>
                        <p className=' font-lato  text-sm lg:text-base text-black font-normal'>Watch Video</p>
                    </span>
                </div>
            </div>
            <div className=' lg:px-[15%] px-[20%] z-50 flex justify-center items-center'>
                <div className=' w-full lg:h-[120px] py-7 lg:py-0 bg-white z-[1000] px-12 flex flex-col lg:flex-row justify-between items-center mt-[90px] rounded-[80px] shadow-lg space-y-8 lg:space-y-0'>
                    <span className=' flex justify-center flex-col items-center'>
                        <span className=' flex flex-row items-center space-x-1'>
                            <p className=' font-lato font-normal text-black text-sm lg:text-base'>Location</p>
                            <img src= { down } className=' w-3 h-[6px]' alt="" />
                        </span>
                        <p className=' font-lato font-normal text-[rgba(0,0,0,0.5)] text-xs lg:text-sm'>Nigeria</p>
                    </span>
                    <span className=' flex justify-center flex-col items-center'>
                        <span className=' flex flex-row items-center space-x-1'>
                            <p className=' font-lato font-normal text-black text-sm lg:text-base'>Property Type</p>
                            <img src= { down } className=' w-3 h-[6px]' alt="" />
                        </span>
                        <p className=' font-lato font-normal text-[rgba(0,0,0,0.5)] text-xs lg:text-sm'>Duplex</p>
                    </span>
                    <span className=' flex justify-center flex-col items-center'>
                        <span className=' flex flex-row items-center space-x-1'>
                            <p className=' font-lato font-normal text-black text-sm lg:text-base'>Max Price</p>
                            <img src= { down } className=' w-3 h-[6px]' alt="" />
                        </span>
                        <p className=' font-lato font-normal text-[rgba(0,0,0,0.5)] text-xs lg:text-sm'>$7,000</p>
                    </span>
                    <button className=' bg-[#015a01] py-3 px-5 text-white font-lato font-normal text-sm lg:text-base rounded-[80px]'>Search</button>
                </div>
            </div>

            <div className=' relative lg:px-[22%] lg:h-[1000px] lg:block flex flex-col mt-8 lg:mt-0 justify-center items-center'>
                <img src={ bg2 } className=' -z-[1000] absolute hidden lg:block top-0 left-0 w-[40%]' alt="" />
                <img src={ bg22 } className=' lg:hidden' alt="" />
                <div className=' float-right text-left'>
                    <p className=' lg:mt-[230px] mt-5 lg:text-left text-center font-lato font-bold text-base text-[#015a01]'>About Us</p>
                    <p className=' font-lato font-bold text-black lg:text-left text-center lg:text-[36px] mt-3 lg:mt-0 text-[20px] lg:leading-[48px]'>We Provide The Best<br></br>Property For You!</p>
                    <p className=' font-lato font-normal text-black lg:text-left text-center text-sm lg:text-base mt-4 lg:mt-16'>Lorem ipsum dolor sit amet, consectetur<br></br>adipiscing elit. Nunc vulputate libero et velit<br></br>interdum, ac aliquet odio mattis.</p>
                    <div className=' flex flex-row mt-6 space-x-3'>
                        <button className=' bg-[#015a01] py-3 px-5 text-white font-lato font-normal lg:text-base text-sm rounded-[80px] '>Learn More</button>
                        <span className=' flex flex-row items-center space-x-2'>
                            <button className='flex justify-center items-center lg:w-[60px] w-[40px] h-[40px] lg:h-[60px] rounded-[50%] bg-[#defade]'>
                                <img src={ play } className=' w-[14px] lg:w-[20px]' alt="" />
                            </button>
                            <p className=' font-lato lg:text-base text-sm text-black font-normal'>Watch Video</p>
                        </span>
                    </div>
                    <img src={  eg1 } className='-z-[1000] absolute hidden lg:block right-0 h-[500px]' alt="" />
                </div>
            </div>
            <div className=' w-full flex lg:flex-row flex-col justify-center items-center mt-32 lg:space-x-12 space-y-10 lg:space-y-0'>
                <div className=' p-7 bg-[#defade] bg-opacity-50 flex flex-col rounded-[40px] justify-center items-center z-50'>
                    <img src={ user } className='' alt="" />
                    <p className=' font-lato font-medium text-base text-black mt-2'>Make Your Dream True</p>
                    <p className=' font-lato font-normal text-sm text-center text-black'>Lorem ipsum dolor sit amet, consectetur<br></br>adipiscing elit.</p>
                </div>
                <div className=' p-7 bg-[#015a01] flex flex-col rounded-[40px] justify-center items-center z-50'>
                    <img src={ tor } className='' alt="" />
                    <p className=' font-lato font-medium text-base text-white mt-2'>Start Your Membership</p>
                    <p className=' font-lato font-normal text-sm text-center text-white'>Lorem ipsum dolor sit amet, consectetur<br></br>adipiscing elit.</p>
                </div>
                <div className=' p-7 bg-[#defade] bg-opacity-50 flex flex-col rounded-[40px] justify-center items-center z-50'>
                    <img src={ home } className='' alt="" />
                    <p className=' font-lato font-medium text-base text-black mt-2'>Enjoy Your New Home</p>
                    <p className=' font-lato font-normal text-sm text-center text-black'>Lorem ipsum dolor sit amet, consectetur<br></br>adipiscing elit.</p>
                </div>
            </div>

            <div className=' lg:px-20 lg:mt-28 px-8 mt-8 lg:block justify-center items-center flex-col'>
                <p className=' font-lato font-bold text-sm lg:text-base text-[#015a01]'>Recents</p>
                <p className=' mt-2 font-lato font-bold lg:text-[36px] text-[20px] text-black'>Recently Added Properties</p>
                <span className=' ml-auto flex flex-row items-center mt-3 space-x-1'>
                    <p className=' font-lato font-normal lg:text-base text-sm text-[#015a01]'>Find More projects</p>
                    <img src={ left } className=' lg:h-3 h-2 w-3 lg:w-4' alt="" />
                </span>
                <div className=' flex lg:flex-row flex-col space-y-5 lg:space-y-0 justify-between items-center mt-5 '>
                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img1 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Palace</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>London, UK</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img2 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Veek Villa</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Abuja, Nigeria</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img3 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Queen's Palace</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Lagos, Nigeria</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img9 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>King's Mansion</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Akure, Nigeria</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <div className=' relative mt-[150px] flex justify-center items-center flex-col'>
                <img src={ eg2 } className=' absolute hidden lg:block -top-[150px] left-0 h-[500px]' alt="" />
                <p className=' font-lato font-bold lg:text-base text-sm text-center text-[#015a01]'>Recents</p>
                <p className=' mt-2 font-lato font-bold lg:text-[36px] text-[20px] text-center text-black'>Our Featured Properties</p>
                <p className=' mt-2 font-lato font-normal lg:text-base text-sm text-center text-black px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br></br> vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <div className=' flex lg:flex-row flex-col justify-center items-center mt-[100px] lg:space-x-8 space-y-5 lg:space-y-0'>
                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img4 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Palace</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>London, UK</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img5 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Veek Villa</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Abuja, UK</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img6 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>King's Mansion</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Akure, NIgeria</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>

                <div className=' flex flex-col lg:flex-row justify-center items-center mt-[30px] lg:space-x-8 space-y-5 lg:space-y-0'>
                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img7 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Palace</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>London, UK</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img8 } className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Veek Villa</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Abuja, UK</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className=' bg-white rounded-[40px] shadow-md px-2 pt-2 pb-14'>
                        <img src={ img9} className=' w-[220px] h-[165px]' alt="" />
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>King's Mansion</p>
                            <p className=' font-lato text-sm font-normal text-black'>$10,900</p>
                        </span>
                        <span className=' flex justify-between mt-1'>
                            <p className=' font-lato text-sm font-normal text-black'>Akure, NIgeria</p>
                            <span className=' flex flex-row space-x-2'>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bath } className alt="" />
                                    <p className=' text-sm font-lato'>3</p>
                                </span>
                                <span className=' flex flex-row space-x-1'>
                                    <img src={ bed } className alt="" />
                                    <p className=' text-sm font-lato'>2</p>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <button className=' bg-[#015a01] py-3 px-5 text-white font-lato font-normal text-base rounded-[80px] mt-[60px]'>Load More</button>
            </div>

            <div className=' justify-center items-center flex flex-col mt-[120px] px-10 lg:px-0 relative'>
                <p className=' font-lato font-bold text-sm lg:text-base text-[#015a01]'>Testimonials</p>
                <p className=' mt-2 font-lato font-bold lg:text-[36px] text-[20px] text-black'>What They Are Saying</p>
                <p className='text-center mt-2 font-lato font-normal text-sm  lg:text-base text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br></br> vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <div className=' lg:p-12 p-5 bg-white bg-opacity-50 rounded-[40px] shadow-md flex flex-col justify-center items-center mt-[100px]'>
                    <img src={ userpic } className=' lg:w-[60px] lg:h-[60px] h-[40px] w-[40px]' alt="" />
                    <p className=' text-center mt-2 font-lato font-normal lg:text-base text-xs text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <p className=' text-center mt-2 font-lato font-medium text-base lg:text-sm text-black'>VEEK</p>
                    <p className=' text-center mt-2 font-lato font-normal text-xs lg:text-sm text-black'>Ui/Ux Designer</p>
                </div>
                <img src={ eg1 } className=' h-[500px] absolute right-0 top-24 hidden lg:block' alt="" />
            </div>

            <div className=' flex flex-col justify-center items-center lg:mt-[150px] mt-8 px-8 lg:px-0'>
                <p className=' mt-2 font-lato font-bold lg:text-[36px] text-[20px] text-black text-center'>Have a Question in mind?<br></br> Let us help you</p>
                <div className=' lg:w-[700px] w-full h-[60px] lg:h-[100px] bg-white rounded-[80px] shadow-xl mt-[45px] p-2 flex flex-row-reverse relative'>
                    <button className=' bg-[#015a01] h-full w-[155px] text-white font-lato font-normal text-base rounded-[80px] block ml-auto '>Send</button>
                    <input type="search" className=' w-full h-full rounded-[80px] py-2 pl-2 lg:py-5 lg:pl-5' placeholder='Email' name=" " id="" />
                </div>
            </div>

            <div className=' bg-[#015a01] mt-[200px] w-full h-full lg:bg-vector bg-cover bg-no-repeat lg:px-16 pt-36 lg:pt-40 lg:pb-20'>
                <div className=' flex lg:flex-row flex-col lg:justify-between justify-center space-y-8 lg:space-y-0 items-center'>
                    <div className=' flex flex-col '>
                        <span className=' flex flex-row justify-center items-center space-x-1'>
                            <img src={ homer } className=' w-[32px]' alt="" />
                            <p className=' text-[#a5feaf] lg:text-[36px] text-[20px] font-lato font-extrabold'>Home Haven</p>
                        </span>
                        <p className=' font-lato lg:text-base text-sm text-center text-[#a5feaf]  leading-[19px] mt-6'>Design amazing digital experiences that<br></br>create more happiness in the world.</p>
                    </div>
                    <div className='lg:mt-2 flex flex-col lg:items-start items-center font-lato text-[#a5feaf] text-sm space-y-3 mt-8 '>
                        <p className=''>Products</p>
                        <p className=''>Overview</p>
                        <p className=''>Features</p>
                        <p className=' flex flex-row items-center'>Solutions<button className=' h-[22px] ml-1 flex justify-center items-center bg-[rgba(30,30,30,0.15)] rounded-[16px] font-lato text-black text-xs w-[42px]'>New</button></p>
                        <p className=''>Tutorials</p>
                        <p className=''>Pricing</p>
                        <p className=''>Releases</p>
                    </div>
                    <div className='mt-2 flex flex-col justify- lg:items-start items-center  font-lato text-[#a5feaf] text-sm space-y-3'>
                        <p className=''>Company</p>
                        <p className=''>About Us</p>
                        <p className=''>Careers</p>
                        <p className=''>Press</p>
                        <p className=''>News</p>
                        <p className=''>Media Kit</p>
                        <p className=''>Contact</p>
                    </div>
                    <div className='mt-2 flex flex-col justify- lg:items-start items-center  font-lato text-[#a5feaf] text-sm space-y-3'>
                        <p className=''>Resources</p>
                        <p className=''>Blog</p>
                        <p className=''>Newsletter</p>
                        <p className=''>Events</p>
                        <p className=''>Help Center</p>
                        <p className=''>Tutorials</p>
                        <p className=''>Support</p>
                    </div>
                    <div className='mt-2 hidden lg:flex flex-col justify- text-left  font-lato text-[#a5feaf] text-sm space-y-3'>
                        <p className=''>Social</p>
                        <p className=''>Twitter</p>
                        <p className=''>LinkedIn</p>
                        <p className=''>Facebook</p>
                        <p className=''>GitHub</p>
                        <p className=''>AngeList</p>
                        <p className=''>Dribble</p>
                    </div>
                    <div className='mt-2 hidden  lg:flex flex-col justify- text-left  font-lato text-[#a5feaf] text-sm space-y-3'>
                        <p className=''>Legal</p>
                        <p className=''>Terms</p>
                        <p className=''>Privacy</p>
                        <p className=''>Cookies</p>
                        <p className=''>Licenses</p>
                        <p className=''>Settings</p>
                        <p className=''>Contact</p>
                    </div>
                </div>
            </div>
            <div className=' w-full bg-[#015a01] lg:px-28 pb-2 lg:pb-8 flex justify-center lg:justify-between'>
                <p className=' font-lato font-normal text-center mt-3 lg:mt-0  text-sm text-[#a5fea5]'>© 2023 Veek’s Design. All rights reserved.</p>
                <span className=' hidden lg:flex flex-row space-x-5'>
                    <img src={ vector1 } className='' alt="" />
                    {/* <img src={ vector2 } className='' alt="" /> */}
                    <img src={ vector3 } className='' alt="" />
                    <img src={ vector4 } className='' alt="" />
                    <img src={ vector5 } className='' alt="" />
                    <img src={ vector6 } className='' alt="" />
                </span>
            </div>
        </div>
     );
}
 
export default Home;