import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IBreadcrumbProps } from './Breadcrumb.config';

const Breadcrumb: FC<IBreadcrumbProps> = ({ datasets = [], style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [links, setLinks] = useState({
    datasets: datasets.map((set) => {
      return {
        label: set.label,
        link: set.link,
      };
    }),
  });
  const [clicked, setClicked] = useState(-1);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async () => {
      const v = await ds.getValue<Array<any>>();

      setLinks((prevValue) => ({
        ...prevValue,
        datasets: datasets.map((_set, index) => ({
          ...prevValue.datasets[index],
          data: v,
        })),
      }));
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
  }, [ds]);
  const handleItemClick = (index: number) => {
    console.log(`Item clicked at index ${index}`);
    setClicked(index);
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ul className="rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center flex-wrap">
        {links.datasets.map((link, index) => (
          <li
            key={index}
            className={cn('inline-flex items-center', {
              clickedLink: index === clicked,
            })}
          >
            <a
              href={link.link}
              className="hover:text-gray-400"
              onClick={() => handleItemClick(index)}
            >
              {link.label}
            </a>
            {index < links.datasets.length - 1 && (
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
