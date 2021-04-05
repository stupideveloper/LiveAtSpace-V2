import { useState, useEffect } from 'react'
const { DateTime } = require("luxon");
export function GetLaunchDate(time) {
    if(time.time) {
        // Get launch time
        const launchDate = DateTime.fromISO(time.time);
        return(<>{launchDate.toHTTP()}</>)
    }
    return(<>Unknown / Error</>)
}
export function GetLaunchCountdown(time) {
    if(time.time) {
        // Get current time
        const [currentTime, setCurrentTime] = useState(DateTime.now())
        // Get launch time
        const launchTime = DateTime.fromISO(time.time); 
        // Calculate time difference
        const timeDiff = launchTime.diff(currentTime)
        useEffect( () => {
            // Update current time
            const update = () => {
                setCurrentTime(DateTime.now());
            }
            // Update every second
            const interval = setInterval(update, 1000);
            return () => clearInterval(interval);
        }, []);
        if (timeDiff.toMillis() > 86400000) {
            // Display with days
            return(<>{timeDiff.toFormat("dd:hh:mm:ss")}</>)
        } else {
            // Display with hours
            return(<>{timeDiff.toFormat("hh:mm:ss")}</>)
        }  
    }
    return(<>Unknown / Error</>)
}


