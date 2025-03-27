import { Parallax } from '../components';
import { Button } from 'element-ui';
/**
 * You can register global components here
 */

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax);
    Vue.component(Button.name, Button);
  }
};

export default globalComponents;
