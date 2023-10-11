import Header from "../../components/Abhyas/header";
import ShowItems from "../../components/Abhyas/showitems";
import Line from "../../components/UI/line";
import { useSelector } from "react-redux";
import Footer from "../../components/Abhyas/footer";

const Home = () => {
    const items = useSelector((state) => state.mock.items)
    return (
        <>
            < Header />
            <Line text="Jee Main Mocks" />
            <ShowItems items={items} />
            <Line text="NEET Mocks" />
            <ShowItems items={items} />
            <Line text="Gate Mocks" />
            <ShowItems items={items} />
            <Footer />
        </>
    );
}


export default Home;