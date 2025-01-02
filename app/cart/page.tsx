'use client'

import { products } from "@/product-data"
import { useState } from "react"
import Link from "next/link"


export default function Cart () {
    const [cartsId] = useState(['123', '345'])

    const CartProduct = cartsId.map(id => products.find(p => p.id === id)!)
    
    return (
        <>
        <h1>Carts</h1>
        {CartProduct.map(p => (
            <Link key={p.id} href={"/product/" + p.id}>
                <h3>{p.name}</h3>
                <p>R$ {p.price}</p>
            </Link>
        ))}
        
        </>
      
    ) 
}