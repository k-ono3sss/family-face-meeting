'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const timeline = [
  "始まりの挨拶",
  "両家の紹介", 
  "歓談・食事",
  "結びの挨拶",
  "記念撮影"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function TodaysFlowSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          {/* Section Title */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4"
              style={{ fontFamily: 'var(--font-noto-serif-jp)' }}
            >
              本日の流れ
            </h2>
            <p className="text-gray-600 font-light">Today's Flow</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gray-300" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start"
                  variants={fadeInUp}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-10 w-4 h-4 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  </div>
                  
                  {/* Content */}
                  <Card className="ml-16 md:ml-20 w-full max-w-md shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg md:text-xl font-light tracking-wide">
                          {item}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}