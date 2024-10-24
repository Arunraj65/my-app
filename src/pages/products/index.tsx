import {FC} from 'react';
import ProductList from '../../components/ProductList';

interface ProductListProps {
    products:
    {
        productId: number;
        name: string;
        price: string;
        category: string;
    }[];
}

const ListingPage: FC<ProductListProps> = ({products}) => {
    return (
        <ProductList products={products} />
    )
}

export async function getServerSideProps(context: any) {
    const{query} = context;
    const{category} = query;
    const queryString = category ? `?category=${category}` : '';
    const response = await fetch(`http://localhost:4000/products${queryString}`);
    const data = await response.json();
    return {
        props: {
            products: data
        }
    }
}

export default ListingPage;