import { Product } from "@/product-data";
import Link from 'next/link'
import Image from 'next/image'

export default function ProductList ({products} : {products: Product [] }) {
    return (
        <div className="flex justify-around items-center ">
            {products.map(product => (
            <Link key={product.id}  href={"/product/" + product.id}>
                    <Image src={'/' + product.imageUrl} alt="Product Image" width={150} height={150} />
                    <h2>{product.name}</h2>
                    <p>R${product.price}</p>
            </Link>    
            ))}
        </div>
    )
}