'use client';
import { Post } from '@/types';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { Tooltip } from '@nextui-org/tooltip';
import { MotionProps, motion } from 'framer-motion';
import { Link as LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
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

interface Props {
  post: Post;
}

const PostCard = (props: Props) => {
  const postData = props.post;
  const router = useRouter();
  const onPress = () => {
    console.log('pres');
  };
  const toPostContent = (postid: string) => {
    console.log('clic');
    router.push(`/post/${postid}`);
  };
  return (
    <motion.div {...motionProps}>
      <Card
        onClick={() => toPostContent(postData.id)}
        fullWidth
        className={style.postCard}
      >
        <CardHeader>
          <Tooltip content="阅读全文" closeDelay={100}>
            <h5 className={style.title}>
              <span>标题</span>
              <LinkIcon size={16} />
            </h5>
          </Tooltip>
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
