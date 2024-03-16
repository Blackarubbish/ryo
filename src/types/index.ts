export interface NavItem {
  id: string;
  title: string;
  state: 1 | 0;
  link: string;
}

export interface Post {
  title: string;
  desc: string;
  img?: string;
  id: string;
  like: number;
  view: number;
  content?: string;
  label: string[];
  ctime: number;
  mtime: number;
}

export interface User {
  name: string;
  desc: string;
  avatar: string;
  links: {
    link: string;
    icon: string;
  };
}
