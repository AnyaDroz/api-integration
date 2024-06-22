import {useEffect, useState } from "react"
import styles from "./GithubApi.module.css"
import axios from "axios";
import RepoDetails from "./RepoDetails";
import {Detail} from "./RepoDetails";
type Repository = {
    name: string,
    id: number,
}
const GithubApi=()=> {
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] =useState([])
    const [details, setDetails] = useState<Detail>()
    const [detailsLoading, setDetailsLoading] = useState(false)

    useEffect(()=> {
        setRepos([])
        setDetails(undefined);
    }, [username])

    const handleSubmit = (event: any) => {
        event.preventDefault();
        searchRepos()
}

const renderRepo=(repo: Repository )=> {
        return (
            <div className={styles.row} key={repo.id} onClick={()=> getDetails(repo.name)}>
                {repo.name}
            </div>
        )
}

const getDetails = (repoName: string) => {
    setDetailsLoading(true);
    axios({
        method:'get',
        url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then(res => {
        setDetailsLoading(false);
        setDetails(res.data);
    })
}

const searchRepos =()=>{
        setLoading(true);
        axios({
            method: 'get',
            url: `https://api.github.com/users/${username}/repos`,}).then(res => {
                setLoading(false);
                setRepos(res.data);
        })
}

    return(
<div className={styles.page}>
    <input
        className={styles.input}
        value={username}
        placeholder="Github username"
        onChange={event=> setUsername(event.target.value)}
        />
    <button className={styles.button} onClick = {handleSubmit}>{loading ? "Searching..." : "Search"}</button>
<div className={styles.results}>
    {repos.map(renderRepo)}
</div>
    <RepoDetails details = {details} loading={detailsLoading}/>
</div>
    )
}
export default GithubApi