import {formatDate} from '~/utilities';

export interface BlogPostHeaderProps {
  title: string;
  date: string;
}

export function BlogPostHeader({title, date}: BlogPostHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="mb-5">{title}</h1>
      <span className="text-pink-600">{formatDate(date)}</span>
    </div>
  );
}
