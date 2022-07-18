import NotificationButton from "./components/NotificationButton";
import Header from "./components/header";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>

      <ToastContainer />
      <Header />
      <main>
        <section id="vendas">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
