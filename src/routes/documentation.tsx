import { Outlet, A, useLocation } from "solid-start";
import { JSX } from "solid-js";

const DocLink = ({ to, children }: { to: string; children: JSX.Element }) => {
  const location = useLocation(),
    href = `/documentation/${to}`;

  return (
    <li>
      <A
        class={`block transition-colors px-4 py-4 ${
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

export default function DocumentationLayout() {
  return (
    <div class="grid grid-cols-[1fr_4fr]">
      <aside class="bg-slate-100">
        <ul>
          <DocLink to="buttons">Buttons</DocLink>
        </ul>
      </aside>
      <main class="py-14 px-16">
        <Outlet />
      </main>
    </div>
  );
}
