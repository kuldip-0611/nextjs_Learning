import { useRouter } from "next/router"

const Product_Id = ()=>{
    const router = useRouter();
    const prodctid = router.query.productid
    return(
        <>
        <h1>You Are Into Individual Products {prodctid}</h1>
        </>
    )
}
export default Product_Id