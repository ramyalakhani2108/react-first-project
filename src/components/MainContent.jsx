import Greetings from "./Greetings";
import ProductInfo from "./ProductInfo";

const MainContent = () => {
    return (
        <main>
            <h2>Main Content</h2>
            <p>This is the main content of the website.</p>
            <Greetings />
            <ProductInfo />
        </main>
    )
}

export default MainContent;