const Navigation = () => {

    const menuItems = [
      { name: 'Home', link: '/' },
      { name: 'Login', link: '/login' },
    ];
  
    return (        
        <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white drop-shadow-md p-3">
          <ul className="flex flex-row gap-4">
            {menuItems.map((item) => (
              <li key={item.name} className="">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
     );
}
 
export default Navigation;