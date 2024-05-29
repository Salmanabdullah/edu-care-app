import Categories from "../components/Categories/CategoriesPanel";
import ContentPanel from "../components/Content-Panel/ContentPanel";
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <ContentPanel />
      <Footer />
    </div>
  );
};

export default Home;