//Import React and the useState hook from the 'react' library
import React, { useState } from "react";

// Declare a functional component called 'Search' that takes in a 'products' prop
function Search({ products }) {
// Use the useState hook to create a state variable called 'searchQuery' with an initial value of an empty string
const [searchQuery, setSearchQuery] = useState("");
// Use the useState hook to create a state variable called 'searchResults' with an initial value of an empty array
const [searchResults, setSearchResults] = useState([]);
// Declare a function called 'handleSearch' that takes in an event as a parameter
const handleSearch = (e) => {
// Set the 'searchQuery' state variable to the current value of the input field
setSearchQuery(e.target.value);
// Use the filter method to create a new array of products that match the search query
let results = products.filter((product) => {
// Return true for products that have a name, category, or price that includes the search query (case-insensitive)
return (
product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
product.price.toString().includes(searchQuery)
);
});
// Set the 'searchResults' state variable to the filtered array of products
setSearchResults(results);
};
// Return JSX for the component, which includes an input field and an unordered list of search results
return (
<div style={{ display: "flex", alignItems: "center" }}>
<input
    class="mx-auto"
    style={{ width: 500 }}
     type="text"
     aria-label="Search"
     placeholder="Search products here"
     onChange={handleSearch}
   />
   <button class="btn btn-primary" onClick={() => setSearchQuery("")}>submit</button>
<ul>
{searchResults.map((product) => (
<li key={product.id}>
{product.name} - {product.category} - ${product.price}
</li>
))}
</ul>
</div>
);
}
// Export the 'Search' component
export default Search;