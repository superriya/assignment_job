// import axios from "axios";
import React, { useState, useEffect } from "react";
import Favourite from "./Favourite";

const Jobs = () => {
    const [data, setData] = useState([]);
    const [searchText, setsearchText] = useState('');
    
    
    useEffect(() => {
        loadData();
    }, [searchText]);

    const loadData = async () => {
        const url = 'https://bbc.uat-tribepad.com/members/oauth/api/job/search.json';
        await fetch(url)
        .then(response => response.json())
        .then(receivedData => setData(receivedData))
        .catch((error) => {
            // Your error is here!
            console.log("API error = ",error)
          });
    }
            
    return (
        <div className="container">
            <h1>Job List</h1>
            <input type="text" 
                className="form-control search-input"
                value={searchText}
                placeholder="Search.."
                onChange={(event)=>setsearchText(event.target.value)}
            />

            <div className="card" width='80%'>
                <div className="card-body">
                    {
                        Object.values(data).map((record, record_index) => (
                            <div key={record_index}>
                                {
                                    Object.values(record).map((jobs_arr, jobs_arr_index) => (
                                        <div key={jobs_arr_index}>
                                            {/* {
                                                console.log("The jobs array = ",jobs_arr)
                                              }  */}
                                            {
                                                Object.values(jobs_arr).filter(job_rec => job_rec.job_id !== undefined && job_rec.job_title.toLowerCase().includes(searchText.toLowerCase())).map(
                                                    (filteredJobs, job_rec_index) => (
                                                        <div key={job_rec_index}>
                                                                <h5 className="card-title">{filteredJobs.job_title}</h5>
                                                                <p className="card-text">{filteredJobs.reference}</p>
                                                                <Favourite job_index={filteredJobs.job_id}/>
                                                                <hr/> 
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}




export default Jobs;