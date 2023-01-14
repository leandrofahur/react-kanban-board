import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './Label.component';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const Primary: ComponentStory<typeof Label> = () => <Label variant='blue'>Label</Label>;

