'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 relative bg-gradient-to-br from-white via-rose-50/30 to-blue-50/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="text-center max-w-3xl mx-auto space-y-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-wide text-gray-800"
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-noto-serif-jp)' }}
        >
          両家顔合わせ
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">食事会</span>
        </motion.h1>

        {/* Date and Venue */}
        <motion.div className="space-y-4" variants={fadeInUp}>
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-gray-700">
            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-rose-400" />
            <span className="font-light tracking-wider">2025.06.14</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-gray-700">
            <span className="font-light tracking-wider">Bistro Chocolat</span>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <Separator className="w-24 md:w-32 bg-gradient-to-r from-rose-300 to-blue-300" />
        </motion.div>

        {/* Message */}
        <motion.div
          className="space-y-6 text-base md:text-lg leading-relaxed"
          variants={fadeInUp}
        >
          <p className="font-light tracking-wide text-gray-800">
            この度はお忙しい中、お集まりいただき
            <br className="hidden sm:block" />
            誠にありがとうございます。
          </p>

          <p className="font-light tracking-wide text-gray-800">
            両家の皆様から頂いた恩を大切に、
            <br className="hidden sm:block" />
            笑顔あふれる家庭を築いて参ります。
          </p>

          <p className="font-light tracking-wide text-gray-800">
            短い時間ではありますが、
            <br className="hidden sm:block" />
            本日はどうぞお楽しみください。
          </p>
        </motion.div>

        {/* Signature with Overlapping Rings */}
        <motion.div
          className="flex items-center justify-center gap-6 pt-8"
          variants={fadeInUp}
        >
          <span className="text-xl md:text-2xl font-light tracking-wider text-gray-700">
            広平
          </span>
          <span className="text-xl md:text-2xl font-light tracking-wider text-gray-700">
            早紀
          </span>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-rose-400 to-blue-400"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </section>
  );
}
