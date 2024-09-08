import React, { useState, useEffect } from 'react';

function SubmittedData() {
    const [submittedData, setSubmittedData] = useState([]);

    const fetchSubmittedData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getFormData');
            const data = await response.json();
            
            if (response.ok) {
                setSubmittedData(data);
            } else {
                console.error('Error retrieving data:', data.error);
            }
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };

    useEffect(() => {
        fetchSubmittedData();
    }, []);

    return (
        <div>
            <h2>Submitted Data</h2>
            {submittedData.length > 0 ? (
                <ul>
                    {submittedData.map((item, index) => (
                        <li key={index}>
                            <strong>Name:</strong> {item.name} <br />
                            <strong>Email:</strong> {item.email} <br />
                            <strong>Message:</strong> {item.message} <br />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data submitted yet.</p>
            )}
        </div>
    );
}

export default SubmittedData;
