import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
// import { Header } from "../components/Header";
import { MainHead } from "../components/MainHead";

export default function Home() {
  console.log(process.env.REACT_APP_API_kEY)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <MainHead />
      {/* <Header /> */}
      {/* body */}
      <Form />
      <Footer />
    </div>
  );
}
