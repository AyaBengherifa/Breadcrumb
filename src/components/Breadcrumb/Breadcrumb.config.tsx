import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdArrowForwardIos } from 'react-icons/md';

import BreadcrumbSettings, { BasicSettings } from './Breadcrumb.settings';

export default {
  craft: {
    displayName: 'Breadcrumb',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(BreadcrumbSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Breadcrumb',
    exposed: true,
    icon: MdArrowForwardIos,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {},
} as T4DComponentConfig<IBreadcrumbProps>;

export interface IBreadcrumbProps extends webforms.ComponentProps {
  name?: string;
  datasets?: IDataSet[];
}
export interface IDataSet {
  label: string;
  link: any;
}
