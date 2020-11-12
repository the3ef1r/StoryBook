import { storiesOf } from "@storybook/vue";
import contactUsForm from "../components/forms/contactForm";

const story = storiesOf("Contact form", module);

story.add("Contact form", () => ({
  template: "<contact-form/>",
  components: { contactUsForm },
}));
