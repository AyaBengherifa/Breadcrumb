import config, { IBreadcrumbProps } from './Breadcrumb.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Breadcrumb.build';
import Render from './Breadcrumb.render';

const Breadcrumb: T4DComponent<IBreadcrumbProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

Breadcrumb.craft = config.craft;
Breadcrumb.info = config.info;
Breadcrumb.defaultProps = config.defaultProps;

export default Breadcrumb;
