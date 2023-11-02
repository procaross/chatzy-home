'use client';
import dynamic from 'next/dynamic';
import React from 'react';

interface Achievement {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
}

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

const achievementsList: Achievement[] = [
  {
    metric: '在线',
    value: '8',
    postfix: '+',
  },
  {
    metric: '用户',
    value: '100',
    postfix: '+',
  },
  {
    prefix: '~',
    metric: '消息总量',
    value: '3000',
  },
  {
    prefix: '~',
    metric: '文件总数',
    value: '200',
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="px-4 py-8 sm:py-16 xl:gap-16 xl:px-16">
      <div className="flex flex-col items-center justify-between rounded-md px-5 py-8 sm:flex-row sm:border sm:border-[#33353F]">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0"
            >
              <h2 className="flex flex-row text-4xl font-bold text-white">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="max-w-[100px] text-4xl font-bold text-white"
                  {...(AnimatedNumbers as any)}
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>

              <p className="text-base text-[#ADB7BE]">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
