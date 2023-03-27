import Link from "next/link"
import { useRouter } from "next/router";


const Home = ()=>{
    const router = useRouter();
    const handleClick = () => {
       console.log('order place successfully');
       router.push('/products');
    }
    return (
        <>
            <h1>Home</h1>
            <Link href='/products'>
                Products
            </Link>
            <Link href='/blog'>
                Blog
            </Link>
            <button onClick={handleClick}>Place order</button>
        </>
    )
}
export default Home