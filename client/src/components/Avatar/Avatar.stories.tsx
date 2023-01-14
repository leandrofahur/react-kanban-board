import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar.component';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Primary: ComponentStory<typeof Avatar> = () => <Avatar size='small' />;

