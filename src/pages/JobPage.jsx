import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaMapMarker } from "react-icons/fa"




const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState([]);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`http://localhost:5000/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log("error fetching data", error);
            }
        };

        fetchJob();
    }, [id]);



    const navigate = useNavigate();

    const deleteJob = async () => {
        if (!window.confirm("Are you sure you want to delete this job?")) return;

        try {
            await fetch(`http://localhost:5000/jobs/${id}`, {
                method: "DELETE",
            });

            navigate("/jobs"); // redirect to jobs page
        } catch (error) {
            console.log("Error deleting job", error);
        }
    };


    return (
        <div>


            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div className="text-orange-700 mb-3 flex items-center gap-2">
                                    <FaMapMarker />
                                    {job.location}
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4">
                                    {job.description}
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4">{job.salary} / Year</p>
                            </div>
                        </main>


                        <aside>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                <h2 className="text-2xl">{job?.company?.name}</h2>

                                <p className="my-2">
                                    {job?.company?.description}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job?.company?.contactEmail}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">{job?.company?.contactPhone}</p>
                            </div>


                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <Link
                                    to="/add-job"
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Add New Job</Link
                                >
                                <button onClick={deleteJob}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>





        </div>
    );
};

export default JobPage;
