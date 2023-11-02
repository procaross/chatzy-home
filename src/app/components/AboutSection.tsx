'use client';
import TabButton from '@/app/components/TabButton';
import React, { useState, useTransition } from 'react';

interface TabData {
  title: string;
  id: string;
  brief: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: 'Compatibility',
    id: 'Compatibility',
    brief: '任何时间,任何地点,任何设备。',
    content: (
      <p className="text-base sm:text-3xl lg:text-4xl">
        Chatzy 兼容性惊人,基于先进的Web技术,你可以在任何设备和平台上使用
        Chatzy。 在手机、平板、电脑,甚至电视之间,你可以无缝地进行切换和同步。
      </p>
    ),
  },
  {
    title: 'Stability',
    id: 'Stability',
    brief: '稳定性,更上一层楼。',
    content: (
      <p className="text-base sm:text-4xl lg:text-4xl">
        Chatzy 具有可靠的稳定性,在仅 0.01%
        的平均故障率下,你的所有消息和文件都会被及时地发送和接收。
      </p>
    ),
  },
  {
    title: 'Speed',
    id: 'Speed',
    brief: '比更快还更快,快到飞起。',
    content: (
      <p className="text-base sm:text-3xl lg:text-4xl">
        Chatzy 的平均响应时间是 0.2 秒,比其他聊天软件都要快得多。不仅如此,Chatzy
        还可以自动适应你的网络速度和设备性能,保证你的聊天体验流畅和稳定。
      </p>
    ),
  },
];

interface Props {}

const AboutSection = (props: Props) => {
  const [tab, setTab] = useState('Compatibility');

  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="mt-4 flex h-full flex-col text-left md:mt-0">
        <p className="text-5xl lg:text-7xl">
          {TAB_DATA.find((t) => t.id === tab)?.brief}
        </p>

        <div className="flex-column mt-8 flex flex-row justify-start">
          <TabButton
            selectTab={() => handleTabChange('Compatibility')}
            active={tab === 'Compatibility'}
          >
            兼容
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange('Stability')}
            active={tab === 'Stability'}
          >
            稳定
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange('Speed')}
            active={tab === 'Speed'}
          >
            快速
          </TabButton>
        </div>

        <div className="mt-8">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
