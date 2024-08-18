import {Component} from 'react'
import './index.css'
import {ThreeDots} from 'react-loader-spinner'
import {IoIosHeartEmpty} from 'react-icons/io'
import {TiHeartFullOutline} from 'react-icons/ti'
import SortDropdown from '../SortDropdown'

class ProductList extends Component {
  state = {
    products: [],
    loading: true,
    sortOption: 'popular',
    likedProducts: {},
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      this.setState({products: data, loading: false})
    } catch (error) {
      console.error('Error fetching products:', error)
      this.setState({loading: false})
    }
  }

  handleSortChange = sortOption => {
    this.setState({sortOption})
  }

  sortProducts = products => {
    const {sortOption} = this.state
    switch (sortOption) {
      case 'lowToHigh':
        return products.sort((a, b) => a.price - b.price)
      case 'highToLow':
        return products.sort((a, b) => b.price - a.price)
      case 'newest':
        return products.sort((a, b) => new Date(b.date) - new Date(a.date))
      case 'popular':
      default:
        return products
    }
  }

  handleLikeClick = productId => {
    this.setState(prevState => ({
      likedProducts: {
        ...prevState.likedProducts,
        [productId]: !prevState.likedProducts[productId],
      },
    }))
  }

  render() {
    const {products, loading, likedProducts} = this.state
    const {category} = this.props

    const filteredProducts =
      category === 'all' || !category
        ? products
        : products.filter(product => product.category === category)

    const sortedProducts = this.sortProducts(filteredProducts)

    if (loading) {
      return (
        <div className="loader">
          <ThreeDots color="#0284c7" height={80} width={80} />
          <p>Loading...</p>
        </div>
      )
    }

    return (
      <div className="product-list">
        <h2>Product List</h2>
        <SortDropdown onSortChange={this.handleSortChange} />
        <ul className="grid-class">
          {sortedProducts.map(product => (
            <li className="product-item" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <p className="description">{product.description}</p>
              <h3 className="rate">${product.price}</h3>
              <button
                type="button"
                onClick={() => this.handleLikeClick(product.id)}
              >
                {likedProducts[product.id] ? (
                  <TiHeartFullOutline className="like-img" />
                ) : (
                  <IoIosHeartEmpty />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ProductList
