import React from 'react';
import {useState} from 'react';
import '../css/JobList.css';

const convertToHalfWidth = (str) => {
    return str.replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFF10 + 48));
};

const JobList =({ jobPosts, filters, selectedSalary })=>{
    const SalaryThreshold = parseInt(selectedSalary.replace('万円', ''), 10) * 10000;

    const filteredJobs = jobPosts.filter((job) => {
        const meetsCategoryFilter = filters.length === 0 || filters.includes(job.category);
        const jobSalary = convertToHalfWidth(job.salary);
        const meetsSalaryFilter = parseInt(jobSalary, 10)*10000>=SalaryThreshold;
        console.log(jobSalary);
        console.log(SalaryThreshold);
        console.log(`Job: ${job.title}, Category: ${job.category}, Salary: ${job.salary}, Meets Category: ${meetsCategoryFilter}, Meets Salary: ${meetsSalaryFilter}`);

        return meetsCategoryFilter && meetsSalaryFilter;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    
    const startIndex = (currentPage - 1) * jobsPerPage;
    const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

    const handlePageChange = (page) =>{
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    console.log('Filtered Jobs:', filteredJobs);

    return(
        <div className="JobList-container">
        <h2>求人一覧</h2>
        <p>該当件数：{filteredJobs.length}件</p>
        {currentJobs.length > 0 ? (
            <ul>
                {currentJobs.map((job, index) => (
                    <li key={index}>
                        <p className="listTitle">{job.title}</p>
                        <p>カテゴリ:{job.category}</p>
                        <p>年収:{convertToHalfWidth(job.salary).endsWith('万円') ? convertToHalfWidth(job.salary) : `${convertToHalfWidth(job.salary)}万円`}</p>
                    </li>
                ))}
            </ul>
        ):(
            <p>現在、求人情報がありません。</p>
        )}
        <div className="pageButton" style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => handlePageChange(currentPage-1)} disabled={currentPage===1}>&lt; </button>
            <div style={{ margin: '0 10px' }}>
                {[...Array(totalPages)].map((_, index)=>(
                    <button
                    key={index +1}
                    onClick={()=> handlePageChange(index + 1)}
                    style={{
                        margin: '0 5px',
                        fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                    }}
                    >
                        {index+1}
                    </button>
                ))}
        </div>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}> &gt;
        </button>
        </div>
    </div>
  );
};

export default JobList;