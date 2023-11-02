'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface Props {}

const HeroSection: React.FC<Props> = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-[1] col-span-12 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              Chatzy,
            </span>

            <br />

            <div className="block min-h-[83.5px] sm:min-h-fit">
              <TypeAnimation
                sequence={[
                  'Make chat easy.',
                  1000,
                  '一点击,就开聊。',
                  1000,
                  '让聊天更进一步。',
                  1000,
                  'Only Chatzy can do.',
                  1000,
                  '身手利落,聊什么都快。',
                  1000,
                  '比更快还更快,快到飞起。',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
            Chatzy
            是一款无需下载的开源即时聊天软件,让你可以轻松地和你的朋友、家人、同事——Chatzy
            的任何用户进行在线交流。
            无论你是聊天、视频通话、分享文件,在任何一款搭载浏览器的设备上,Chatzy
            都能满足你的需求。
          </p>

          <div>
            <Link
              href="/"
              className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-6 py-3 text-white transition-all hover:bg-slate-200 sm:w-fit"
            >
              即将到来
            </Link>

            <Link
              href="/"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-800 sm:w-fit"
            >
              <span className="block rounded-full bg-[#121212] px-5 py-2 transition hover:bg-slate-800">
                代码仓库
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
