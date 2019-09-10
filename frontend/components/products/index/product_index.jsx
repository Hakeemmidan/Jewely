// import React from 'react';
// import { ProductIndexItem } from './product_index_item';

// export class ProductIndex extends React.Component {
//     componentDidMount() {
//         this.props.fetchProducts()
//     }

//     render() {
//         const products = this.props.products.map(product => {
//             return (
//                 <ProductIndexItem
//                     key={product.id}
//                     product={product}
//                     removeProduct={this.props.removeProduct}
//                 />
//             )
//         })

//         return (
//             <div>
//                 <ul>
//                     {products}
//                 </ul>
//             </div>
//         )
//     }
// }