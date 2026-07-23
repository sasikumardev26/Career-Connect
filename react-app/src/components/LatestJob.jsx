import React, { useEffect, useState } from "react";
import axios from "axios";
import Jobcard from "./Jobcard";

const LatestJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "https://career-connect-production-194e.up.railway.app/job/jobs/"
      );

      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-10 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest Jobs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <Jobcard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;