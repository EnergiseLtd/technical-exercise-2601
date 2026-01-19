import { cn } from '~/lib/utils';
import { fontMono, fontSans } from '~/styles/fonts';

import '~/styles/globals.css';

export default function RootLayout(props: LayoutProps<'/'>) {
  const { children } = props;

  return (
    <html lang="en-GB">
      <body className={cn('antialiased', fontSans.variable, fontMono.variable)}>
        {children}
      </body>
    </html>
  );
}
