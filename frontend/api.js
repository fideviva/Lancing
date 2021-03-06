// const API= 'http://localhost:3000' //for ios connection
const API= 'http://10.0.2.2:3000' // for android connection


//Home Page Queries

export const getHomePageFreelancer = async(id) => {
    
    const res = await fetch(`${API}/frhome/${id}`);
    return await res.json();
    
}
export const getHomePageCompany = async(id) => {
    
    const res = await fetch(`${API}/cohome/${id}`);
    return await res.json();
}

//Profile Page Queries
export const getComapnysJobs = async(id) => {
    const res = await fetch(`${API}/CompanyProfile/jobs/${id}`);
    return await res.json();
}

//Searched Item Page Queries
export const getFreelancerById = async(id) => {
    const res = await fetch(`${API}/freelancer/${id}`);
    return await res.json();
}
export const getJobById = async(id) => {
    const res = await fetch(`${API}/job/${id}`);
    return await res.json();
}

//Job Queries 

//Freelancer Queries

export const getFreelancersById = async(id) => {
    const res = await fetch(`${API}/freelancers/${id}`);
    return await res.json();
}

export const getFreelancersByEmail = async(email) => {
    const res = await fetch(`${API}/freelancers/email/${email}`);
    return await res.json();
}

export const getMatchedFreelancers = async(id) => {
    const res = await fetch(`${API}/cohome/${id}`);
    return await res.json();
}

export const insertFreelancer= async(newFreelancer) => {
    const res =await fetch(`${API}/freelancers`,{
        method: 'POST', 
        headers: {Accept: 'application/json', "Content-Type": "application/json"},
        body: JSON.stringify(newFreelancer)
});
return await res.json();
};

export const deleteFreelancer= async(id) => {
    await fetch(`${API}/freelancers/${id}`,{
        method: 'DELETE',
    })
};

export const updateFreelancer= async(id, newFreelancer) => {
    const res = await fetch(`${API}/freelancers/${id}`,{
        method: 'PUT',
        headers: {Accept: 'application/json', "Content-Type": "application/json"},
        body: JSON.stringify(newFreelancer)

    })
    return res;
}

export const getFreelancerSkills = async(id) => {
    const res = await fetch(`${API}/freelancers/skills/${id}`);
    return await res.json();
}

//Job Queries

export const getMatchedJobs = async(id) => {
    const res = await fetch(`${API}/frhome/${id}`);
    
    return await res.json();
}
export const getJob = async(id) => {
    const res = await fetch(`${API}/job/${id}`);
    return await res.json();
}
export const getJobSkills = async(id) => {
    const res = await fetch(`${API}/job/skills/${id}`);
    return await res.json();
}



//Job Application Queries

//Company Contact Queries
export const getCompanyByEmail = async(email) => {
    const res = await fetch(`${API}/companies/email/${email}`);
    return await res.json();
}

//testlog
export const testLog = async(email) => {
    
    const res = await fetch(`${API}/testlog/${email}`);
    return await res.json();
    
}