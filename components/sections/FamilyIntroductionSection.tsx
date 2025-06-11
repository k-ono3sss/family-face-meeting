'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Users } from 'lucide-react';

const familyMembers = [
  {
    family: '小野家',
    members: [
      {
        name: '順市',
        role: '父',
        description: '畑第一主義',
        image: '/images/junichi.jpg',
      },
      {
        name: '聡子',
        role: '母',
        description: '奉仕の心',
        image: '/images/satoko.jpg',
      },
      {
        name: '魁人',
        role: '長男',
        description: '小野家一の読書家',
        image: '/images/kaito.jpg',
      },
      {
        name: '広平',
        role: '次男',
        description: 'インド人マインド優しさの塊',
        image: '/images/kohei.jpg',
      },
      {
        name: '良美',
        role: '長女',
        description: 'シュガーの守り人',
        image: '/images/yoshimi.jpg',
      },
      {
        name: 'シュガー',
        role: '愛犬',
        description: '僕は人間だ',
        image: '/images/sugar.jpg',
      },
    ],
  },
  {
    family: '武内家',
    members: [
      {
        name: '博',
        role: '父',
        description: '勝負は本気、努力人',
        image: '/images/hiroshi.jpg',
      },
      {
        name: '千恵',
        role: '母',
        description: 'ポジティブ王',
        image: '/images/chie.jpg',
      },
      {
        name: '早紀',
        role: '長女',
        description: '元気ハツラツ頑固ガール',
        image: '/images/saki.jpg',
      },
      {
        name: '志帆',
        role: '次女',
        description: '気配り上手の管理栄養士',
        image: '/images/shiho.jpg',
      },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export default function FamilyIntroductionSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4"
              style={{ fontFamily: 'var(--font-noto-serif-jp)' }}
            >
              ご家族紹介
            </h2>
            <p className="text-gray-600 font-light">Family Introduction</p>
          </motion.div>

          {/* Family Groups */}
          <div className="space-y-16">
            {familyMembers.map((familyGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                className="space-y-8"
                variants={fadeInUp}
              >
                {/* Family Name */}
                <div className="text-center">
                  <h3
                    className="text-2xl md:text-3xl font-serif font-light mb-2"
                    style={{ fontFamily: 'var(--font-noto-serif-jp)' }}
                  >
                    {familyGroup.family}
                  </h3>
                  <div className="w-12 h-px bg-gray-300 mx-auto" />
                </div>

                {/* Family Members */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                  variants={staggerChildren}
                >
                  {familyGroup.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      variants={fadeInUp}
                      initial="rest"
                      whileHover="hover"
                    >
                      <Card className="border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                        <motion.div variants={cardHover}>
                          <CardContent className="p-6 text-center space-y-4">
                            {/* Avatar */}
                            <Avatar className="w-20 h-20 mx-auto ring-2 ring-gray-100">
                              <AvatarImage
                                src={member.image}
                                alt={member.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-gray-100 text-gray-600">
                                <Users className="w-8 h-8" />
                              </AvatarFallback>
                            </Avatar>

                            {/* Name and Role */}
                            <div className="space-y-1">
                              <h4 className="text-lg font-medium tracking-wide">
                                {member.name}
                              </h4>
                              <p className="text-sm text-gray-500 font-light">
                                {member.role}
                              </p>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 font-light leading-relaxed">
                              {member.description}
                            </p>
                          </CardContent>
                        </motion.div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
