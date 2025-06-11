'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export default function ThankYouSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-rose-50/50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full shadow-lg"
          animate={floatingAnimation}
          transition={{ delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full shadow-lg"
          animate={floatingAnimation}
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-2 h-2 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full shadow-md"
          animate={floatingAnimation}
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-5 h-5 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full shadow-lg"
          animate={floatingAnimation}
          transition={{ delay: 0.5 }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full"
          animate={{
            ...floatingAnimation,
            rotate: [0, 360, 0],
          }}
          transition={{ delay: 1.5, duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full"
          animate={{
            ...floatingAnimation,
            rotate: [360, 0, 360],
          }}
          transition={{ delay: 2.5, duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/10 to-white/30" />

      <motion.div
        className="text-center max-w-4xl mx-auto space-y-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        {/* Decorative sparkles */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          variants={fadeInUp}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-6 h-6 text-pink-400 fill-current" />
          </motion.div>
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <Sparkles className="w-8 h-8 text-rose-400 fill-current" />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <Sparkles className="w-6 h-6 text-blue-400 fill-current" />
          </motion.div>
        </motion.div>

        {/* Thank You Message */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide bg-gradient-to-r from-rose-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          Thank you!
        </motion.h2>

        {/* Japanese Thank You */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider text-gray-700"
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-noto-serif-jp)' }}
        ></motion.p>

        {/* Enhanced decorative line */}
        <motion.div className="flex justify-center" variants={fadeInUp}>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
        </motion.div>

        {/* Final message */}
        <motion.div
          className="space-y-4 text-lg md:text-xl text-gray-600 font-light leading-relaxed"
          variants={fadeInUp}
        >
          <p>
            本日は貴重なお時間をいただき、
            <br className="hidden sm:block" />
            心より感謝申し上げます。
          </p>

          <p className="text-base md:text-lg text-gray-500">
            これからもどうぞよろしくお願いいたします。
          </p>
        </motion.div>

        {/* Signature with Overlapping Rings */}
        <motion.div className="pt-12 space-y-4" variants={fadeInUp}>
          <div className="flex items-center justify-center gap-6">
            <span className="text-xl md:text-2xl font-light tracking-wider text-gray-700">
              広平
            </span>
            <span className="text-xl md:text-2xl font-light tracking-wider text-gray-700">
              早紀
            </span>
          </div>

          <p className="text-sm md:text-base text-gray-500 font-light">
            2025.06.14 at Bistro Chocolat
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
