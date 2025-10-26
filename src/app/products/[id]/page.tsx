import React from 'react'

async function ProductId({ params }: { params: { id: string } }) {

    const { id } = await params

    return (
        <div>Product Id {id}</div>
    )
}

export default ProductId