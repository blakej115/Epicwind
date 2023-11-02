import { A, useLocation } from "solid-start";
import { JSX } from "solid-js";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element;
}) => {
  const location = useLocation();

  return (
    <li>
      <A
        class={`block transition-colors px-4 py-4 rounded-md ${
          location.pathname == href
            ? `bg-sky-500 text-white`
            : `hover:bg-sky-500 hover:text-white`
        }`}
        href={href}
      >
        {children}
      </A>
    </li>
  );
};

export default function Header() {
  return (
    <header class="flex justify-between bg-white shadow-md px-8 py-4 items-center">
      <div>
        <h1 class="text-3xl font-bold">
          <A class="block" href="/">
            Epicwind
          </A>
        </h1>
      </div>
      <nav>
        <ul class="flex gap-x-2">
          <NavLink href="/">Home</NavLink>
          {/* <NavLink href="/documentation">Documentation</NavLink>
          <NavLink href="/documentation/get-started">Get Started</NavLink> */}
        </ul>
      </nav>
    </header>
  );
}
