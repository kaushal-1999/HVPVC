import React, { useState } from 'react';
import './Notice.css';

const noticesData = [
    {
        id: 1,
        date: '2025-09-01',
        title: 'College Start FYJC Arts and Science',
        content: 'The college will commence FYJC Arts and Science classes from 1st September 2025.'
    },
    {
        id: 2,
        date: '2025-09-03',
        title: 'Last Merit List Update',
        content: 'The final merit list for FYJC admissions has been updated on the college website.'
    },
    {
        id: 3,
        date: '2025-09-07',
        title: 'College Uniform Compulsory',
        content: 'All students must wear the college uniform starting Monday, 7th September 2025.'
    },
    {
        id: 4,
        date: '2025-09-05',
        title: 'New Notice Placeholder',
        content: 'This is a placeholder for additional notices.'
    }
];

const Notice = () => {
    const [selectedNotice, setSelectedNotice] = useState(null);

    return (
        <div className="notice-board-container">
            <h1 className="notice-board-heading">Notice Board</h1>

            <div className="notice-board">
                {/* Left Side: Selected Notice */}
                <div className="notice-details">
                    {selectedNotice ? (
                        <>
                            <h2>{selectedNotice.title}</h2>
                            <p><strong>Date:</strong> {selectedNotice.date}</p>
                            <p>{selectedNotice.content}</p>
                        </>
                    ) : (
                        <>
                            <h2>Select a notice</h2>
                            <p>The details of the selected notice will appear here.</p>
                        </>
                    )}
                </div>

                {/* Right Side: Notice List */}
                <div className="notice-list">
                    {noticesData.map((notice) => (
                        <div
                            key={notice.id}
                            className={`notice-item ${selectedNotice?.id === notice.id ? 'active' : ''}`}
                            onClick={() => setSelectedNotice(notice)}
                        >
                            <div className="date">{notice.date}</div>
                            <div className="title">{notice.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notice;
