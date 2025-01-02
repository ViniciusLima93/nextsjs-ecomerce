import ProductList from "@/app/components/ProductList";
import { products } from "@/product-data";

export default function ProductPage() {
    return(
        <>
        <h1>Product</h1>
        <ProductList products={products}/>
        
        </>
        
    ) 
}