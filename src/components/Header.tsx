import { A, useLocation } from "solid-start";
import { JSX } from "solid-js";

const NavLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: JSX.Element;
  icon?: boolean;
}) => {
  const location = useLocation(),
    target =
      href.includes("http://") || href.includes("https://")
        ? "_blank"
        : undefined;

  return (
    <li>
      <A
        class={`transition-colors rounded-md ${
          !icon
            ? `block px-4 py-4`
            : `text-2xl w-[56px] h-full flex items-center justify-center`
        } ${
          location.pathname == href
            ? `bg-sky-500 text-white`
            : `hover:bg-sky-500 hover:text-white`
        }`}
        href={href}
        target={target}
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
          <NavLink href="/documentation">Documentation</NavLink>
          <NavLink href="https://github.com/blakej115/Epicwind" icon={true}>
            <i class="fa-brands fa-github"></i>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
