import ProductList from "@/app/components/ProductList";



export default async function ProductPage() {
    const response = await fetch('http://localhost:3000/api/product');
    const products = await response.json()
    console.log('thi is products ->', products)

    const response2 = await fetch('http://localhost:3000/api/users/2/cart', {
        cache: 'no-cache'
    });
    const cartProducts = await response2.json()
    console.log('thi is carts products ->', cartProducts)

    return(
        <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Product</h1>
        <ProductList products={products} initialCartProducts={cartProducts}/>
        
        </div>
        
    ) 
}