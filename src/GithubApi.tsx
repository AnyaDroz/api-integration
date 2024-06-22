import styles from "./GithubApi.module.css"

const GithubApi=()=> {
    const [username. setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    return(
<div className={styles.page}>
    <input
        classname={styles.input}
        value={username}
        placeholder="Github username"
        onChange={e=> setUserName(e.target.value)}
        />
    <button className={styles.button} onClick = {handleSubmit}></button>

</div>
    )
}
export default GithubApi