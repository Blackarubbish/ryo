import ReactMd from 'react-markdown';
interface Props {
  content: string;
}
const Markdown = ({ content }: Props) => {
  return <ReactMd>{content}</ReactMd>;
};

export default Markdown;
