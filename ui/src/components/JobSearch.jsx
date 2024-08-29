import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField, InputAdornment, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Search, LocationOn, CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import { HOST as serverUrl } from '../commanVar';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (searchTerm.trim()) {
      try {
        const response = await axios.post(`${serverUrl}/JobSearch`, {
          search: searchTerm
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.data)
        setJobs(response.data); // Handle the search results
      } catch (error) {
        console.error('Error performing search:', error);
      }
    }
  };
  useEffect(() => {
    // Function to fetch job data
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${serverUrl}/Jobs`);
        console.log(response.data.data)
        setJobs(response.data.data); // Assuming the data is under 'data'
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    // Call the function
    fetchJobs();
  }, [serverUrl]);
  return (
    <div className='w-full justify-center'>
      <div className="w-full border rounded-md shadow-md p-4">
        <form onSubmit={handleSearch}>
          <TextField
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            placeholder="Search a job title or keyword"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <div className='m-3 text-gray-500 opacity-90 font-medium'>
          250 Jobs results
        </div>
        <div>
          {jobs.map((job, index) => (
            <div
              key={index}
              className='w-full border rounded-md shadow-md cursor-pointer mb-5 transition-all hover:shadow-lg hover:scale-[1.01]'
            >
              <div className='p-4 flex'>
                <div className='flex justify-start flex-grow'>
                  <img
                    src={job.logo}
                    alt={job.companyName}
                    className='w-[40px] h-[40px] ml-4'
                  />
                  <div className='block ml-2'>
                    <div className='text-[15px] mt-[0px] font-bold'>{job.designation}</div>
                    <div className='flex items-center text-[10px] mt-[0px] text-gray-400'>
                      <div className='text-[13px] font-medium'>{job.companyName}</div>
                      <span className='text-3xl mt-[-20px] px-1'>.</span>
                      <div className='px-2 py-[2px] bg-orange-200 font-medium text-orange-600 rounded-full'>{job.type}</div>
                      <span className='text-3xl mt-[-20px] px-1'>.</span>
                      <div className='px-2 py-[2px] bg-red-200 font-medium text-red-600 rounded-full'>Urgently hiring</div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <LocationOn className='mr-1' />
                  <div className='text-[15px]'>{job.location}</div>
                </div>
              </div>
              <div className='ml-8'>
                <List className='text-gray-800'>
                  {job.description.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ paddingY: 0, paddingX: 0, marginBottom: '-4px' }} // Adjust marginBottom to reduce line gap
                    >
                      <ListItemIcon sx={{ minWidth: '20px' }}>
                        <span className='text-[20px] mt-[-3px]'>&#8226;</span> {/* Default bullet point */}
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ style: { fontSize: '13px' } }}
                        sx={{ margin: 0 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobSearch