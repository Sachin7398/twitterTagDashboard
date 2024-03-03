import React from "react";
// import CampaignCard from "../components/common/CampaignCard";
// import { IoMdAdd } from "react-icons/io";

import {record} from "../records.js"

export default function Tags() {

 const handleDelete = ( ) => {

 }


  return (
    <>
     <div className="">
     <div className="text-center mt-4 md:mt-0 w-[95%] mx-auto">
        <h1 className="font-black text-3xl text-start text-black ">Tags</h1> 
      </div>

      <div className="flex justify-between flex-wrap-reverse text-center my-6 text-black">
        <div className="flex justify-between w-[60%] text-sm lg:text-lg lg:mt-6 lg:w-[90%] xl:w-[63%]">
          <div className="mx-2 text-center"><b>Account name |</b></div>  
          <div className="mx-8"><b>Followers count |</b></div>
          <div className="mx-1"><b>Following |</b></div>
          <div className="mx-4"><b>Tags  |</b></div>
          <div className="mx-4 lg:hidden"><b>Action  |</b></div>
        </div>
        <div className="my-6  cursor-pointer">
          <input className="py-1 px-6 w-[85vw] lg:w-80 bg-slate-300 rounded-2xl text-black font-black " type="search" name="" id="" placeholder="Search" />
        </div>
      </div>

      <div className="">
          {
            record && record.map(record => {
              return(
                <div key={record.id} className="flex justify-between items-center my-4 bg-slate-100 rounded-xl lg:p-4 py-3 p-4  text-black font-black ">
                  
                  <div className="flex justify-between items-center relative w-[65%] text-sm lg:text-lg lg:w-[65%] ">
                    <div className="bg-blue-600 h-[52px] lg:h-[70px] rounded-2xl w-3 lg:w-4 absolute lg:-ml-4 -ml-[16px] "></div>
                    <div className=" flex w-[40%] items-center ml-1 lg:ml-3"> <img className=" w-7 h-7 lg:w-10 lg:h-10 rounded-full mr-2 " src="{ record.image }" alt="logo" /> {record["account "] }</div>
                    <div className="w-[15%] ml-6 text-center">{record["followers "]}</div>
                    <div className="w-[15%] ml-16 text-center">{record.following}</div>
                    <div className="w-[15%] ml-12 lg:ml-4 text-center">{record.tags}</div>
                  </div>
                  <button onClick={() => handleDelete( )} className="bg-red-600 px-2 lg:px-3 py-1 rounded-3xl font-black text-sm  lg:text-lg " type="button">{record["action "]}</button>
                </div>
              )
            }
            )
          }
      </div>
     </div>


















      {/* <button className="bg-[#002F53] text-white text-[16px] font-[600] leading-[20px] py-4 rounded-xl flex justify-center px-3 items-center">
        <IoMdAdd className="mr-3 text-[20px]" />
          Create New Campaign
        </button> */}

      {/* <div className="flex flex-col md:flex-row mt-10">
        <CampaignCard
          title="Campaign 1"
          description={
            <>
              <p className="text-black font-extrabold">Total Bids: 24</p>
              <p className="text-black font-extrabold">Last Run: Today</p>
            </>
          }
          link="https://www.google.com"
          image="https://via.placeholder.com/300x200"
          imageAlt="Placeholder image"
          status="Active"
        />
         <CampaignCard
          title="Campaign 1"
          description={
            <>
              <p className="text-black font-extrabold">Total Bids: 24</p>
              <p className="text-black font-extrabold">Last Run: Yesterday</p>
            </>
          }
          link="https://www.google.com"
          image="https://via.placeholder.com/300x200"
          imageAlt="Placeholder image"
          status="Disabled"
        />
      </div> */}
    </>
  );
}
