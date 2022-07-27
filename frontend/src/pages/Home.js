import axios from 'axios';
import { useEffect, useState } from "react";
import ItemBill from "../components/ItemBill";

const Home = () => {
  const [bills, setBills] = useState(null);
  useEffect(() => {
    const fetchBills = async() => {
        const response = await axios.get('/api/bills');
        setBills(response.data);
    }

    fetchBills();
    console.log(bills);
  }, []);

  return (
    <div className="home">
      <h1>Invoices</h1>
      <div className="bills">
        {bills && bills.map((bill) =>(
            <ItemBill key={bill._id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default Home;
