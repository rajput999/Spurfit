import React, { useEffect, useState } from 'react'
import classes from './Body.module.css'
import photo from './photos/photo.webp'
import axios from 'axios';
import activeData from './data/active.json';
import pData from './data/pending.json';
import achData from './data/achData.json';


const Body = () => {
    const [status, setStatus] = useState(1);
    const [data, setData] = useState([activeData, pData, achData]);
    const [searchInput, setSearchInput] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [clicked, setClicked] = useState(0);
    const [filter, setFilter] = useState(false);

    const handleCheck = () => {
        // setIsChecked(!isChecked);
        {
            data[status - 1].filter(item => item.trainee.toLowerCase().includes(searchInput)).map((item, index) => (
                item.checked = !isChecked
            ))
        };
        setIsChecked(!isChecked);
    }

    const check = (item) => {
        item.checked = !item.checked;
        setClicked(clicked + 1);
    }

    useEffect(() => {
        {
            data[status - 1].filter(item => item.trainee.toLowerCase().includes(searchInput)).map((item, index) => (
                console.log(data)
            ))
        };
    }, clicked)

    // useEffect(() => {
    //     fetch('active.json')
    //       .then(response => response.json())
    //       .then(
    //         data =>{
    //             setData(data)
    //             console.log(data)
    //         });
    //       console.log(data)
    //   }, []); 
    useEffect(() => {
        console.log(data[status - 1])
    }, status, []);

    return (
        <div className={classes.wbody}>
            <div className={classes.sortHeader}>
                <div className={classes.sort}>
                    <div className={status == 1 ? classes.activeDiv : classes.unActiveDiv} onClick={() => setStatus(1)}>Active <span className={status == 1 ? classes.activeSpan : classes.unActiveSpan}>{Object.keys(activeData).length}</span></div>
                    <div className={status == 2 ? classes.activeDiv : classes.unActiveDiv} onClick={() => setStatus(2)}>Pending <span className={status == 2 ? classes.activeSpan : classes.unActiveSpan}>{Object.keys(pData).length}</span></div>
                    <div className={status == 3 ? classes.activeDiv : classes.unActiveDiv} onClick={() => setStatus(3)}>Archived <span className={status == 3 ? classes.activeSpan : classes.unActiveSpan}>{Object.keys(achData).length}</span></div>
                </div>

                <div className={classes.modDiv}>
                    <button className={classes.addBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" style={{ fill: 'white' }}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                        <div style={{ marginLeft: '0.4rem' }}>Add New</div>
                    </button>
                    <div className={classes.input}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <input style={{ border: 'none' , marginLeft:'0.4rem'}} type="text" placeholder="Search anything" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                    </div>
                    <div>
                        <div className={classes.filter}>
                            <button className={classes.filterbtn} onClick={() => setFilter(!filter)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" style={{ fill: '#6f42c1' }}><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" /></svg>
                                <div style={{ marginLeft: '0.4rem' }}>
                                    Filter by
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <table className={classes.table} >
                    <thead className={classes.tHead}>
                        <tr>
                            <th className={classes.headClm}><input type="checkbox" style={{ margin: '0 1.3rem 0 1.2rem' }} checked={isChecked} onChange={handleCheck} />Trainee</th>
                            <th className={classes.headClm}>Compliance</th>
                            <th className={classes.headClm}>Last Workout</th>
                            <th className={classes.headClm}>Workout Plan</th>
                            <th className={classes.headClm}>Last Modified</th>
                            <th className={classes.headClm}>Diet Plan</th>
                            <th className={classes.headClm}>Last Modified</th>
                            <th className={classes.headClm}>Trainer</th>
                            <th className={classes.headClm}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className={classes.tBody}>
                        {data[status - 1].filter(item => item.trainee.toLowerCase().includes(searchInput)).map((item, index) => (
                            <tr key={index}>
                                <td className={classes.tBodyClm}><div style={{ display: 'flex', alignItems: 'center' }}><input type="checkbox" checked={item.checked} onChange={() => check(item)} /><img src={photo} alt="avatar" className={classes.photo} />{item.trainee}</div></td>
                                <td className={classes.tBodyClm}>{item.compliance}</td>
                                <td className={classes.tBodyClm}>{item.lastworkout}</td>
                                <td className={classes.tBodyClm}><div className={classes.workoutclm}>{item.workoutplan}</div></td>
                                <td className={classes.tBodyClm}>{item.lastmodified}</td>
                                <td className={classes.tBodyClm}><div className={classes.dietClm}>dietplan</div></td>
                                <td className={classes.tBodyClm}>{item.lastmodified}</td>
                                <td className={classes.tBodyClm}>trainer</td>
                                <td className={classes.tBodyClm}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Body