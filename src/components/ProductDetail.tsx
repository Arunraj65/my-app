interface Props {
    product: {
        productId: string;
        name: string;
        price: string;
        category: string;
        description: string;
    }
}

export default function ProductDetail({product}: Props) {
    return (
        <div style={{ textAlign: 'center', margin:'100px' }}>
            <h3>Name: <span style={{ fontWeight: 'bold' }}>{product.name}</span></h3>
            <p>Category: <span style={{ fontWeight: 'bold' }}>{product.category}</span></p>
            <p>Price: <span style={{ fontWeight: 'bold' }}>{product.price}$</span></p>
            <p>Description: {product.description}$</p>
        </div>
    )
}
