import { FeaturedProductList } from "../components/featuredProductList/FeatureProductList";
import "./App.css";

export function App() {
  return <>
  <FeaturedProductList
    title={'Produtos em alta'}
    link={'Ver todos →'}
  />
  </>;
  }