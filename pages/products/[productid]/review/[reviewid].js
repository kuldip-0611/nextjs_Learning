const { useRouter } = require("next/router")

const Review = ()=>{
    const router = useRouter();
    const {reviewid,productid} = router.query;
    return(
        <div>
            Review page of {reviewid} product {productid}
        </div>
    )
}
export default Review