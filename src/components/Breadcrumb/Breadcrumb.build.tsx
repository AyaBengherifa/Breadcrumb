import { FC, useState } from 'react';
import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { IBreadcrumbProps } from './Breadcrumb.config';

const Breadcrumb: FC<IBreadcrumbProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const [links, setLinks] = useState([
    { label: 'Home', link: '/' },
    { label: 'Category', link: '/category' },
    { label: 'Subcategory', link: '/category/subcategory' },
  ]);
  const handleItemClick = (index: number) => {
    const updatedLinks = links.map((link, i) => ({
      ...link,
      selected: i === index,
    }));
    setLinks(updatedLinks);
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ul className="  rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center flex-wrap">
        {links.map((link, index) => (
          <li key={index} className="inline-flex items-center ">
            <a
              href={link.link}
              className="hover:text-blue-500"
              onClick={() => handleItemClick(index)}
            >
              {link.label}
            </a>
            {index < links.length - 1 && (
              <svg
                className="w-5 h-auto fill-current mx-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
