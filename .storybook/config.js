import { configure } from "@storybook/vue";

function loadStories() {
    require('../src/stories/percentChart.js'),
    require('../src/stories/contactForm.js'),
    require('../src/stories/searchLight.js')
    require('../src/stories/ieSlider.js')
}

configure(loadStories, module)