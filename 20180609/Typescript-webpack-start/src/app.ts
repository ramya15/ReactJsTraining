import { Cart } from './Class/Cart';
import { ProductList } from './Class/ProductList';
import { products} from './Data/products';

const cart = new Cart();
const productList = new ProductList(products, cart);
    
productList.renderList();
cart.renderCartBox();