import {useEffect, useRef, useState} from "react";
const BASE_URL="https://jsonplaceholder.typicode.com"

type Post = {
    id:number;
    title:string;
}
const DummyData =() => {
    const [isLoading,setIsLoading]=useState(false)
    const [posts,setPosts] = useState<Post[]>([])
    const [error, setError]=useState()
    const [page,setPage]=useState(0)

    const abortControllerRef= useRef<AbortController | null>(null)


    useEffect(()=>{
        const fetchPosts = async()=> {
            abortControllerRef.current?.abort()
            abortControllerRef.current = new AbortController()
            setIsLoading(true)
            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}`,
                    {signal:abortControllerRef.current?.signal}
                   );
                const posts = await response.json() as Post[];
                setPosts(posts);
            }
            catch(error: any) {
                if(error.name === "AbortError") {
                    console.log('Aborted')
                    return;
                }
                setError(error)
            }
            finally { setIsLoading(false)}


        }
    fetchPosts();
    },[page])

    if (isLoading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div>something went wrong please try again</div>
    }


    return(
        <div>
            <button onClick={()=>{setPage(page +1)}}>Increase Page{page}</button>
        {posts.map((post)=>{
            return <div key ={post.id}>{post.title}</div>
        })}
    </div>
    )
}

export default DummyData