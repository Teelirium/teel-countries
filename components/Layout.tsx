import { RefreshIcon } from '@/components/icons/index.tsx';
import { RefreshButton } from '@/islands/RefreshButton.tsx';
import { classes } from '@/util/classes.ts';
import { ComponentChildren } from 'preact';

type LayoutProps = { children: ComponentChildren; path: string };

const routes = [
  ['/', 'Главная'],
  ['/visited', 'Посещённые страны'],
  ['/random', 'Случайная страна'],
];

export function Layout(props: LayoutProps) {
  return (
    <div class='min-h-screen m-0 bg-[#ebeef5]'>
      <header class='p-2 sticky bg-[#ebeef5] top-0 w-full z-10'>
        <nav class=''>
          <ul class='flex justify-center gap-4'>
            {routes.map(([path, name], i) => (
              <li
                class={classes(
                  'flex gap-1 w-auto',
                  props.path === path ? 'text-blue-600' : ''
                )}
              >
                <a
                  href={path}
                  class={classes('w-auto text-clip whitespace-nowrap')}
                  tabIndex={i + 1}
                >
                  {name}
                </a>
                {path === '/random' && <RefreshButton tabIndex={i + 1} />}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main class='p-4'>{props.children}</main>
    </div>
  );
}
