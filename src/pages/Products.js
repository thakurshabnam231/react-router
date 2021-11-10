import {Link} from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h1> new products</h1>
            <section>
            <ul>
            <li>
            <Link to='/rpoducts/p1'> product 1</Link></li>
            <li>  <Link to='/rpoducts/p2'> product 2</Link>product 2</li>
            <li>  <Link to='/rpoducts/p3'> product 3</Link>product 3</li>
            </ul></section>
        </div>
    )
}

export default Products
