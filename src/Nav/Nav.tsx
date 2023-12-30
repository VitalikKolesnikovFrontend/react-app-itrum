import { NavLink } from "react-router-dom";
import "./Nav.scss";
import IconUsers from "../assets/Icons/Component2.svg?react";
import IconProducts from "../assets/Icons/Component1.svg?react";
import IconCategories from "../assets/Icons/Component3.svg?react";
import IconCountries from "../assets/Icons/Component4.svg?react";
import IconBrands from "../assets/Icons/Component5.svg?react";
import IconProtocols from "../assets/Icons/Component6.svg?react";
import IconOrders from "../assets/Icons/Component7.svg?react";
import IconBanners from "../assets/Icons/Component8.svg?react";
import IconSeminars from "../assets/Icons/Component9.svg?react";
import IconCode from "../assets/Icons/Component10.svg?react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="menu__nav">
        <NavLink to="/products" className="menu__item">
          <IconProducts />
          <span className="menu__link">Продукты</span>
        </NavLink>
        <NavLink to="/users" className="menu__item">
          <IconUsers />
          <span className="menu__link">Пользователи</span>
        </NavLink>
        <NavLink to="/categories" className="menu__item">
          <IconCategories />
          <span className="menu__link">Категории</span>
        </NavLink>
        <NavLink to="/countries" className="menu__item">
          <IconCountries />
          <span className="menu__link">Города</span>
        </NavLink>
        <NavLink to="/brands" className="menu__item">
          <IconBrands />
          <span className="menu__link">Бренды</span>
        </NavLink>
        <NavLink to="/protocols" className="menu__item">
          <IconProtocols />
          <span className="menu__link">Протоколы</span>
        </NavLink>
        <NavLink to="/orders" className="menu__item">
          <IconOrders />
          <span className="menu__link">Заказы</span>
        </NavLink>
        <NavLink to="/banners" className="menu__item">
          <IconBanners />
          <span className="menu__link">Баннеры</span>
        </NavLink>
        <NavLink to="/seminars" className="menu__item">
          <IconSeminars />
          <span className="menu__link">Семинары</span>
        </NavLink>
        <NavLink to="/code" className="menu__item">
          <IconCode />
          <span className="menu__link">Промокоды</span>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Nav;
