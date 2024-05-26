import Categories from "../Categories/CategoriesPanel";
import ContentPanel from "../Content-Panel/ContentPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
