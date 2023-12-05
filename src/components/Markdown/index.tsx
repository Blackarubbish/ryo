import ReactMd from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface Props {
  content: string;
}
const Markdown = ({ content }: Props) => {
  const log = (props: any) => {
    console.log('&&&', props);
  };
  return (
    <ReactMd
      components={{
        code: (props) => {
          const { children, className, node, ...rest } = props;
          log(props);
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            // @ts-ignore
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={docco}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMd>
  );
};

export default Markdown;
