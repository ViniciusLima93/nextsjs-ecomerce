
import {connectTODB} from '../db'

export async function GET () {

    const { db } = await connectTODB()
    const products = await db.collection('products').find({}).toArray()
    return new Response(JSON.stringify(products),{
        status:200,
        headers: {
            "Content-Type": "application/json"
        }
    })

}