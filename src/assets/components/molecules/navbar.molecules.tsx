function NavBar() {
  return (
    <nav className="navBar">
      {" "}
      <a href="Nombre Marca" className="site-title">
        Nombre Marca
      </a>
      <li>
        <a href="/Precio"> Productos </a>
      </li>{" "}
      <li>
        <a href="/Sobre Nosotros"> Sobre Nosotros</a>
      </li>
    </nav>
  );
}

export default NavBar;
