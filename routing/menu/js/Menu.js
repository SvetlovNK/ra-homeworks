const Menu = ({links}) => {
  return (
    <nav className="menu">
      {links.map(link => <NavLink key={link.id} className="menu__item" activeClassName="menu__item-active" exact to={link.url}>{link.text}</NavLink>)}
    </nav>
  )
};