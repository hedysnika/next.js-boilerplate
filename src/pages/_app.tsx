import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import type { AppType } from 'next/app'
import { UserProvider } from '../../lib/hooks/useUser';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </div>

  )
}

export default appWithTranslation(MyApp);
