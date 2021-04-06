export default function Custom404() {
    return (
    <div style={{display:"grid", placeItems:"center", minHeight:"100vh"}}>
        <div style={{padding:"1rem"}}>
            <h1>[404] - Page not found</h1>
            <h2 style={{margin:"1rem 0"}}>We can't find that page.. It either doesn't exist or has been moved..</h2>
            <img src="/static/images/sn8.gif" alt="Starship SN8 Crash Gif" style={{width:"75%"}}/>
            <h3 style={{padding:'0.2rem', border:"var(--border)", marginTop:"1rem", width:"max-content"}}><a href="/">Return Home</a></h3>
        </div>
    </div>)
}