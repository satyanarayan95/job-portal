import {instance} from './api';

//creating a job
export const createjob = (job,token) => instance.post("/jobs/",{...job},{...token});

//get all Jobs
export const getAllJobs =(token)=> instance.get("/recruiters/jobs",{...token})

//get condidates of a jobs

const getCandidates = (id,header) => instance.get(`/recruiters/jobs/${id}/candidates`,{...header});

