import { NavLink } from "react-router-dom";
import { BiReceipt, BiGroup } from "react-icons/bi";
const Aside = () => {
  const linkIsActive = (navData) => (navData.isActive ? "active" : "");
  return (
    <aside>
      <h1>Billing</h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav__element">
            <NavLink className={linkIsActive} to="/" active>
              <BiReceipt className="main-nav__element-icon" />
              Invoices
            </NavLink>
          </li>
          <li className="main-nav__element">
            <NavLink className={linkIsActive} to="/customers">
              <BiGroup className="main-nav__element-icon" />
              Customers
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
