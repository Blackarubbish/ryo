'use client';

import { useEffect, useState } from 'react';

interface DirItem {
  text: string;
  tagName: string;
  id: string;
}
const PostDir = () => {
  const [dirItems, setDirItems] = useState<DirItem[]>([]);
  useEffect(() => {
    const headings = document.querySelectorAll<HTMLHeadingElement>(
      '.markdown-body [data-name="md-heading"]'
    );
    const tempDirItems: DirItem[] = [];
    headings.forEach((item) => {
      tempDirItems.push({
        text: item.innerText,
        tagName: item.tagName,
        id: item.id,
      });
    });
    setDirItems(tempDirItems);
  }, []);
  return (
    <div>
      {dirItems.map((item, index) => {
        return (
          <li key={index}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        );
      })}
    </div>
  );
};

export default PostDir;
