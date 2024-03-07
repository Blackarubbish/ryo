'use client';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { MotionProps, motion } from 'framer-motion';
import style from './index.module.scss';

// 定义动画效果
const motionProps: MotionProps = {
  initial: { scale: '95%', translateY: '5%', opacity: 0 },
  whileInView: { scale: '100%', translateY: '0%', opacity: 1 },
  exit: { scale: '95%', translateY: '5%', opacity: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    ease: [0.2, 0.88, 0.32, 1.1], // 回弹效果
  },
};

const PostCard = () => {
  return (
    <motion.div {...motionProps}>
      <Card isPressable fullWidth className={style.postCard}>
        <CardHeader>
          <h5 className={style.title}>标题</h5>
        </CardHeader>
        <CardBody>
          <div className="line-clamp-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            sapiente accusamus sunt officia repellendus quibusdam, nemo ipsum
            repellat similique, tempora aliquam vitae nesciunt voluptatem facere
            quis sequi qui, amet enim! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore perferendis fuga est eveniet. Doloribus
            suscipit corporis facere iusto dignissimos natus maxime hic id
            perspiciatis, fugit ipsa impedit itaque qui consectetur!
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className={style.footer}>
            <div className={style.tags}>
              <Button size="sm" color="primary" variant="flat">
                JavaScript
              </Button>
              <Button size="sm" color="success" variant="flat">
                JavaScript
              </Button>
              <Button size="sm" color="secondary" variant="flat">
                JavaScript
              </Button>
            </div>
            <div className={style.info}>
              <Chip color="secondary" variant="dot">
                2023-4-12
              </Chip>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PostCard;
