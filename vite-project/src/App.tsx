import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import JobList from './components/JobList';
import JobSide from './components/JobSide';
import PostJob from './components/PostJob';


const App = ()=>{
  const [jobPosts, setJobPosts] = useState<{ category: string; salary: string; title: string }[]>([]);

  const [filters, setFilters] = useState<string[]>([]);

  const [selectedSalary, setSelectedSalary] = useState('300万円以上');

  const addJobPost = (postData: { category: string; salary: string; title: string }) => {
    console.log('Post Data:', postData);
    setJobPosts((prevPosts) => [...prevPosts, postData]);
    console.log('Job Posts:', [...jobPosts, postData]);
  };

  return (
    <div className="h-[1300px]">
    <Header />
    <Routes>
      <Route key="home" path="/" element={<div className="flex h-[1200px]"><JobSide filters={filters} setFilters={setFilters} selectedSalary={selectedSalary} setSelectedSalary={setSelectedSalary}/><JobList filters={filters} jobPosts={jobPosts} selectedSalary={selectedSalary} /></div>}/>
      <Route key="PostJob" path="/post-job" element={<PostJob addJobPost={addJobPost}/>}/>
    </Routes>
    </div>
  )
}

export default App
