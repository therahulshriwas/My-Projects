const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 bg-black bg-opacity-75 fixed w-full z-10">
        <div className="flex items-center space-x-4">
          <img
            src="https://storage.googleapis.com/a1aa/image/IONB31v6vjYnAFFcXKiZVKMLDCNZhL4xep3eZHv1fnoB7dQoA.jpg"
            alt="Netflix Logo"
            width="100"
            height="50"
          />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">TV Shows</a>
            <a href="#" className="hover:underline">Movies</a>
            <a href="#" className="hover:underline">New & Popular</a>
            <a href="#" className="hover:underline">My List</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <i className="fas fa-search"></i>
          <i className="fas fa-bell"></i>
          <img
            src="https://storage.googleapis.com/a1aa/image/MCN0outjVporOd6qUKnIdpeMM9ofBfimzQMckkyXASLb7dQoA.jpg"
            alt="User Avatar"
            width="40"
            height="40"
            className="rounded-full"
          />
        </div>
      </header>
    );
  };
  
  export default Header;