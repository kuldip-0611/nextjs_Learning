import Link from "next/link"


const Home = ()=>{
    return (
        <>
            <h1>Home</h1>
            <Link href='/products'>
                Products
            </Link>
            <Link href='/blog'>
                Blog
            </Link>
        </>
    )
}
export default Home