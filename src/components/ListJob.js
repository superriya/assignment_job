import React, { useState, useEffect } from 'react'
import Favourite from './Favourite';

const ListJob = () => {
    const [jobData, setjobData] = useState([]);
    const [searchText, setsearchText] = useState('');

    const makeAPICall = async () => {
        console.log("Fetch API Data...");
        // console.log(fetch('https://bbc.uat-tribepad.com/members/oauth/api/job/search.json'));
        fetch('https://bbc.uat-tribepad.com/members/oauth/api/job/search.json')
        .then(response => {
            if(!response.ok){
                throw Error("Error Occoured!");
            }
            // console.log("Fetch API Response", response);
            return response.json();
        })
        .then(data => {
            // console.log("Fetch API Response Data", data.jobs.job);
            const htmlRecord = data.jobs.job
            // console.log("Set Job Data", htmlRecord);
            setjobData(htmlRecord);
        })
        .catch(error => {
            console.log("API Error ", error);
        })
    }

    useEffect(() => {
        makeAPICall();
    }, []);

    // Got Final Jobs Array Data
    // console.log("Final Job Data", jobData);

    return (
        <div className="container">
            <h1>List of Jobs</h1>
            
            {/* Search inputField */}
            <form>
                <input type="text" 
                    className="form-control search-input"
                    value={searchText}
                    placeholder="Search job.."
                    onChange={(event) => {setsearchText(event.target.value)}}
                />
            </form>

            <div className="card" width='80%'>
                <div className="card-body">
                    {
                        jobData.filter(job_rec => job_rec.job_title && job_rec.reference.toLowerCase().includes(searchText.toLowerCase())).map(record => (
                            <div className="jobsdata" key={record.job_id}>
                                <p>
                                    <span className="jobsdata_title">Job Title: </span>
                                    <span>{record.job_title}</span>
                                </p>
                                <p>
                                    <span className="jobsdata_title">Reference: </span>
                                    <span>{record.reference}</span>
                                </p>
                                <Favourite job_index={record.job_id} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListJob
