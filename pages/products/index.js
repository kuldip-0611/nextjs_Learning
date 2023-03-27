import Link from "next/link"

const Products = ({productid=100}) => {
 
    return (
      <>
        <Link href='/'>Back </Link>
        <Link href={`/products/1`}>Product 1</Link>
        <Link href={`/products/2`} replace>Product 2 </Link>
        <Link href={`/products/${productid}`}>Product {productid}</Link>
      </>
    )
}
export default Products