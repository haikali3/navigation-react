import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 pl-2 border-blue-500"
      >
        <Link>{link.label}</Link>
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col align-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
