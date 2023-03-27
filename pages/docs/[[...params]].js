import { useRouter } from "next/router"

const Catch_All_Route = ()=>{
    const router = useRouter();
    const {params = []} = router.query
    if(params.length === 0){
        return <h1>you are in documents</h1>
    }
    else if(params.length === 1){
        return <h1>feature is {params[0]}</h1>
    }
    else{
        return <h1>feature is {params[0]} and detail is {params[1]}</h1> 
    }
}
export default Catch_All_Route 