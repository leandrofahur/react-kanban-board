import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Column } from './Column.component';

export default {
  title: 'Components/Column',
  component: Column,
} as ComponentMeta<typeof Column>;

export const Primary: ComponentStory<typeof Column> = () => <Column />;

