import React, { ClassAttributes, HTMLAttributes } from 'react';
import ReactMd, { ExtraProps } from 'react-markdown';

interface Props {
  content: string;
}
const Markdown = (props: Props) => {
  const { content } = props;
  let headingCount = 0;
  const Heading = (
    props: ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement> &
      ExtraProps
  ) => {
    const { node, children } = props;
    headingCount++;
    const id = `post-heading-${headingCount}`;
    return React.createElement(
      node?.tagName || 'h1',
      { id, 'data-name': 'md-heading' },
      children
    );
  };
  return (
    <article className="p-8 dark:bg-[#22272e]">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-slate-800 dark:text-[#adbac7] ">
          标题
        </h1>
      </div>
      <div className="markdown-body">
        <ReactMd
          components={{
            h1: Heading,
            h2: Heading,
            h3: Heading,
            h4: Heading,
            h5: Heading,
            h6: Heading,
          }}
        >
          {content}
        </ReactMd>
      </div>
    </article>
  );
};

export default Markdown;
