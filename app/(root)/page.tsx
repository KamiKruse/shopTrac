import ProductList from '@/components/shared/products/product-list'
import sampleData from '@/db/sample-data'

export default function Home() {
  
  return <ProductList data={sampleData.products} title='New Arrivals' limit={4}/>
}
