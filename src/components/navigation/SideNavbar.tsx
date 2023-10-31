import SideNavbarItem from '../../common/SideNavbarItem';
import logo from '@/assets/logo.webp';
import { NavItems } from '@/data/navigation/navItems';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import useFullScreen from '@/store/FullScreen';
import useMenu from '@/store/Menu';
import { useState } from 'react';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  const { isFullScreen } = useFullScreen();
  const { isMenuOpen, toggleMenu } = useMenu();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navItems = NavItems();

  const handleActiveDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      <div
        className={`w-72 bg-lightWhite dark:bg-darkBlue ${isMenuOpen ? 'left-0' : '-left-72 lg:left-0'} ${
          isFullScreen ? '!-left-72' : 'left-0 '
        } fixed top-0 right-0 z-[11] h-screen transition-all duration-300 ease-out`}
      >
        <nav
          onMouseEnter={() => {
            if (isCollapsed) {
              setMenuCollapsed(false);
            }
          }}
          onMouseLeave={() => {
            if (!menuCollapsed && isCollapsed) {
              setMenuCollapsed(true);
            }
          }}
          className={`${
            menuCollapsed ? 'w-20' : 'w-72'
          } fixed h-full overflow-y-auto bg-white text-gray-500 transition-all duration-300 ease-out dark:bg-mediumBlue dark:text-lightGray`}
        >
          <ul className='my-2'>
            <li className='flex items-center justify-between space-x-4 px-6'>
              {!menuCollapsed ? (
                <>
                  <Link to={`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`} className='flex items-center '>
                    <img src={logo} alt='Logo' width={32} height={32} className='mr-4 h-8 w-8' />
                    <span className='text-2xl font-semibold'>Admin</span>
                  </Link>

                  <button aria-label='collaps menu button' onClick={() => setIsCollapsed((prev) => !prev)}>
                    {isCollapsed ? <FaRegCircle /> : <FaRegDotCircle />}
                  </button>
                </>
              ) : (
                <img src={logo} alt='Logo' className='h-8 w-8' />
              )}
            </li>
          </ul>
          {navItems.map((group, index) => (
            <div key={index} className='p-2'>
              <p className='mx-6 mt-6 mb-4 truncate text-xs font-semibold text-[#5a6071]'>{group.title}</p>
              <ul>
                {group.items.map((item, indexItem) => (
                  <li key={indexItem}>
                    <SideNavbarItem
                      handleActiveDropdown={handleActiveDropdown}
                      activeDropdown={activeDropdown}
                      icon={item.icon}
                      name={item.name}
                      href={item.href || ''}
                      dropdown={item.dropdown}
                      menuCollapsed={menuCollapsed}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      {isMenuOpen && <div className='fixed inset-0 z-10 bg-black opacity-50' onClick={toggleMenu}></div>}
    </>
  );
};

export default SideNavbar;
