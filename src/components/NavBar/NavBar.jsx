export default function NavBar(){
  const linkList = ['About Me', 'Experience', 'Education', 'Projects', 'Achievements', 'Contact', 'Blog', 'Gallery']
  return (
    <header>
      <nav>
        <div className="navbar">
          <a>
            <img src="/icons/fav.png" />
            Hugo Profile
          </a>
          <input />
          <div>
            <ul>
              {
                linkList.map((item, index) => 
                <li key={index}>
                  {item}
                </li>
              )}
            </ul>
          </div>
          <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z">
            </path>
          </svg>
        </div>
      </nav>
    </header>
  );
}