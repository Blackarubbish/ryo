export interface NavItem {
  id: string;
  title: string;
  state: 1 | 0;
}

export interface Posts {
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
