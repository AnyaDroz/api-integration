
export type Detail={
    name: string,
    fork: string,
    language: string,
    stargazers_count: number
}

type Props = {
    details: Detail | undefined,
    loading: boolean,
}

const RepoDetails = ({details, loading}: Props) => {
    if (loading) {
        return(
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <div>{details?.name}</div>
            <div>{details?.fork}</div>
            <div>{details?.language}</div>
            <div>{details?.stargazers_count}</div>
        </div>
    )
}

export default RepoDetails