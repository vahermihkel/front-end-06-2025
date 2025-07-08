import { useEffect, useState } from "react";
import type { Product } from "../../models/Product";
import type { Category } from "../../models/Category";

interface FilterButtonsInterface {
  databaseProducts: Product[], 
  setProducts: (product: Product[]) => void
}

function FilterButtons(params: FilterButtonsInterface) {
  const [categories, setCategories] = useState<Category[]>([]);
  const categoriesUrl = import.meta.env.VITE_CATEGORIES_DB_URL;

  useEffect(() => {
      fetch(categoriesUrl)
        .then(res => res.json())
        .then(json => setCategories(json || []))
  }, [categoriesUrl]);
  
  const filterByCategory = (categoryClicked: string) => {
    const result = params.databaseProducts.filter(product => product.category === categoryClicked);
    params.setProducts(result);
  }

  return (
    <div>
      {categories.map(category => 
        <button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}
        </button>)
      }
    </div>
  )
}

export default FilterButtons