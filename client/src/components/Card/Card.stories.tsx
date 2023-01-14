import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card.component';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => <Card />;

