import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import materialForm from '../components/materialForm.vue'

const story = storiesOf("Material Form", module);
story.addDecorator(withInfo);

story.add(
  "default form with components",
  () => ({
    template: '<material-form></material-form>',
    components: { materialForm }
  }),
  {
    info: {},
  }
);

