import './index.css'

const SortDropdown = ({onSortChange}) => {
  const handleChange = event => {
    onSortChange(event.target.value)
  }

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Recommended:</label>
      <select id="sort" onChange={handleChange}>
        <option value="popular">Popular</option>
        <option value="newest">Newest First</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  )
}

export default SortDropdown
