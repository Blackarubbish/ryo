'use client';
import style from './index.module.scss';

import { motion } from 'framer-motion';

export default function RoyHeader() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={style.headerContent}>
          <h1>躲在草丛里</h1>
          <h5 className={style.subtitle}>学而不思则罔</h5>
        </div>
      </motion.div>
    </div>
  );
}
