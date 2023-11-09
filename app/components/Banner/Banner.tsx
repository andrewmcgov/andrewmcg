export interface BannerProps {
  children?: React.ReactNode;
  status: 'info' | 'warning';
}

export function Banner({children, status}: BannerProps) {
  // basic banner styles
  let bannerClasses = 'banner-component p-4 my-10 rounded-md border-2';

  if (status === 'info') {
    bannerClasses += ' bg-sky-700 border-sky-400 ';
  } else if (status === 'warning') {
    bannerClasses += 'bg-yellow-700 border-yellow-400 ';
  }

  return <div className={bannerClasses}>{children}</div>;
}
