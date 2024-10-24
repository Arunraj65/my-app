import {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ProductListProps {
    products:
    {
        productId: number;
        name: string;
        price: string;
        category: string;
    }[];
}

export default function ProductList({ products }: ProductListProps) 
{
    const[category, setCategory] = useState(products);
    const[option, setOption] = useState('first');
    const router = useRouter();
    const fetchCategory = async () => {
        const response = await fetch(`http://localhost:4000/products?category=${option}`);
        const data = await response.json();
        setCategory(data);
        router.push(`/products?category=${option}`, undefined, {shallow: true});
    };
    const handleChange = (e:any) => {
        setOption(e.target.value)
        }

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Product Listing</h1>
            <div style={{ textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Select Category:</span>
            <select onChange={handleChange}>
                <option>first</option>
                <option>second</option>
                <option>third</option>
            </select>
                <br />
                <button className="submit-button" onClick={fetchCategory}>Submit</button>
            </div>
            <ul style={{marginLeft:'50px', marginRight:'50px'}}>
                {category.map((product) => (
                    <>
                        <Link href={`/products/${product.productId}`}>
                            <li key={product.productId}>
                                <h3>{product.name}</h3>
                                <p>{product.category}</p>
                                <p>{product.price}</p>
                            </li>
                            <hr />
                        </Link>
                    </>
                ))}
            </ul>
        </div>
    )
}