import {FC } from 'react';
import { GetStaticProps } from 'next';
import ProductDetail from '../../components/ProductDetail';


interface Props {
    product: {
        productId: string;
        name: string;
        price: string;
        category: string;
        description: string;
    }
}

const ProductDetailPage: FC<Props> = ({product}) => {
    return (
        <ProductDetail product={product} />
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {productId: '1'}},
            {params: {productId: '2'}},
            {params: {productId: '3'}},
        ],
        fallback:false,
    }
}

export const getStaticProps: GetStaticProps = async(context) => {
    const{params} = context;
    console.log(params);
    const response = await fetch(`http://localhost:4000/products/${params?.productId}`);
    const data = await response.json();
    return (
        {
            props: {
                product: data
            }
        }
    ) 
};

export default ProductDetailPage;