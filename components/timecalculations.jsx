import { useState, useEffect } from 'react'
const { DateTime } = require("luxon");
export function GetLaunchDate(time) {
    if(time.time) {
        // Get launch time
        const launchDate = DateTime.fromISO(time.time);
        console.log(time.time)
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
        // If time is negative say launching now
        if(Math.sign(timeDiff.toMillis()) == -1) {
            return(<>Launching Now!</>)
        }

        if (timeDiff.toMillis() > 86400000) {
            // Display with days
            return(<>{timeDiff.toFormat("dd:hh:mm:ss")}</>)
        } else if(timeDiff.toMillis() > 3600000) {
            // Display with hours
            return(<>{timeDiff.toFormat("hh:mm:ss")}</>)
        } else if(timeDiff.toMillis() > 60000){
            // Display with minutes
            return(<>{timeDiff.toFormat("mm:ss")}</>)
        } else {
            // Display with seconds
            return(<>{timeDiff.toFormat("ss")}</>)
        }  
    }
    return(<>Unknown</>)
}