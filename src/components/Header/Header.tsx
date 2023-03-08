'use client';
import Logo from '../Logo';
import { Navbar, Button, DarkThemeToggle } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';

export default function Header() {
  interface menuItem {
    title: string;
    urlTo: string;
    isActive: boolean;
  }

  const menu: Array<menuItem> = [
    { title: 'Home', urlTo: '/', isActive: usePathname() === '/' },
    {
      title: 'Movies',
      urlTo: '/movies',
      isActive: usePathname() === '/movies',
    },
    {
      title: 'Series',
      urlTo: '/series',
      isActive: usePathname() === '/series',
    },
    {
      title: 'Actors',
      urlTo: '/actors',
      isActive: usePathname() === '/actors',
    },
  ];

  return (
    <Navbar
      fluid={true}
      rounded={true}>
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        {/*<DarkThemeToggle /> deprecated : waiting for Flowbite-react to find a solution*/}
        <Button
          href="https://github.com/fsioni/my-aimed-movies"
          className="bg-gray-800 mx-2">
          <BsGithub
            size={24}
            className="mr-2"
          />
          GitHub
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {menu.map(({ title, urlTo, isActive }) => (
          <Navbar.Link
            key={title}
            href={urlTo}
            active={isActive}>
            {title}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
