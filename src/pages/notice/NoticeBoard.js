import React, { useState, useEffect } from 'react';
import './NoticeBoard.css';

const noticesData = [
    {
        id: 1,
        title: 'Annual Sports Day',
        subject: 'Events',
        date: '2025-09-01',
        description: 'Join us for our Annual Sports Day with competitions and fun events for all students.',
        attachment: { type: 'image', url: 'https://images.unsplash.com/photo-1593642634443-3f7e0f7e1b7a?auto=format&fit=crop&w=800&q=80' }
    },
    {
        id: 2,
        title: 'Science Exhibition',
        subject: 'Exhibition',
        date: '2025-09-15',
        description: 'Explore innovative projects by our students in the Science Exhibition.',
        attachment: { type: 'pdf', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
    },
    {
        id: 3,
        title: 'Parent-Teacher Meeting',
        subject: 'Meeting',
        date: '2025-08-10',
        description: 'Parents are requested to attend the meeting to discuss student progress.',
        attachment: null
    },
    {
        id: 4,
        title: 'Holiday Notice',
        subject: 'Holiday',
        date: '2025-08-25',
        description: 'School will remain closed on account of Diwali festival.',
        attachment: null
    },
];

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const NoticeBoard = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const [selectedYear, setSelectedYear] = useState(currentYear.toString());
    const [selectedMonth, setSelectedMonth] = useState(currentMonth.toString());
    const [selectedNotice, setSelectedNotice] = useState(null);

    // Unique years from notices
    const years = Array.from(new Set(noticesData.map(n => new Date(n.date).getFullYear()))).sort((a,b)=>b-a);

    const monthsForYear = selectedYear
        ? Array.from(new Set(noticesData
            .filter(n => new Date(n.date).getFullYear() === parseInt(selectedYear))
            .map(n => new Date(n.date).getMonth())))
        : [];

    const filteredNotices = noticesData.filter(notice => {
        const date = new Date(notice.date);
        return (!selectedYear || date.getFullYear() === parseInt(selectedYear)) &&
               (!selectedMonth || date.getMonth() === parseInt(selectedMonth));
    });

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return `${('0'+d.getDate()).slice(-2)}/${('0'+(d.getMonth()+1)).slice(-2)}/${d.getFullYear()}`;
    };

    useEffect(() => {
        if (!monthsForYear.includes(parseInt(selectedMonth)) && monthsForYear.length > 0) {
            setSelectedMonth(monthsForYear[0].toString());
        }
    }, [selectedYear, monthsForYear]);

    return (
        <div className="noticeBoard">
            <h1 className="noticeBoard__title">Notice Board</h1>

            <div className="noticeBoard__filters">
                <div className="noticeBoard__filterGroup">
                    <label>Year:</label>
                    <select value={selectedYear} onChange={(e)=>{ setSelectedYear(e.target.value); setSelectedMonth(''); }}>
                        <option value="">Select Year</option>
                        {years.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                </div>

                <div className="noticeBoard__filterGroup">
                    <label>Month:</label>
                    <select value={selectedMonth} onChange={(e)=>setSelectedMonth(e.target.value)} disabled={!selectedYear}>
                        <option value="">Select Month</option>
                        {monthsForYear.map(monthIndex => (
                            <option key={monthIndex} value={monthIndex}>{monthNames[monthIndex]}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="noticeBoard__list">
                {filteredNotices.length === 0 && <p className="noticeBoard__noNotice">No notices for this selection</p>}
                {filteredNotices.map(notice => (
                    <div
                        key={notice.id}
                        className="noticeBoard__listItem"
                        onClick={() => setSelectedNotice(notice)}
                    >
                        <div className="noticeBoard__date">{formatDate(notice.date)}</div>
                        <div className="noticeBoard__info">
                            <h3>{notice.title}</h3>
                            <p className="noticeBoard__shortDesc">{notice.description.slice(0, 80)}...</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedNotice && (
                <div className="noticeBoard__modal" onClick={() => setSelectedNotice(null)}>
                    <div className="noticeBoard__modalContent" onClick={e => e.stopPropagation()}>
                        <span className="noticeBoard__close" onClick={() => setSelectedNotice(null)}>&times;</span>
                        <h2>{selectedNotice.title}</h2>
                        <p className="noticeBoard__subject">{selectedNotice.subject}</p>
                        <p className="noticeBoard__date">{formatDate(selectedNotice.date)}</p>
                        <p className="noticeBoard__description">{selectedNotice.description}</p>
                        {selectedNotice.attachment && selectedNotice.attachment.type === 'image' && (
                            <img src={selectedNotice.attachment.url} alt="attachment" className="noticeBoard__attachment"/>
                        )}
                        {selectedNotice.attachment && selectedNotice.attachment.type === 'pdf' && (
                            <a href={selectedNotice.attachment.url} target="_blank" rel="noreferrer" className="noticeBoard__attachmentLink">
                                View PDF
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoticeBoard;
