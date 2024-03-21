import { ProgressBar } from "./components/progressBar/ProgressBar";

export default {
  title: "Component/Progress",
  component: ProgressBar,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 3 },
    variation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    outline: { control: "boolean" },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <ProgressBar {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => n + 1)}
  </ProgressBar>
);

export const Number = Template.bind({});
Number.args = {
  backgroundColor: "red",
  label: "Step 1",
  variation: "horizontal",
  outline: false,
};

export const Tick = Template.bind({});
Tick.args = {
  backgroundColor: "red",
  label: "Step 1",
  variation: "horizontal",
  outline: false,
  tick: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  backgroundColor: "red",
  label: "Step 1",
  variation: "vertical",
  outline: false,
  tick: true,
  description: "add description here",
};

// export const Vertical = Template.bind({});
// Vertical.args = {
//   backgroundColor: "red",
//   label: "Step 3",
// };

// argTypes: {
//   handleClick: {
//     action: "handleClick";
//   }
// }
