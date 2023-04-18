import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  const [localeChanged, setLocaleChanged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localeChanged) {    
      setLocaleChanged(false);
    }
  }, [localeChanged, t]);

  const changeLanguage = async (language: any) => {
    try {
      await router.push(router.pathname, router.asPath, { locale: language });
      setLocaleChanged(true);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <main className="min-h-screen h-auto bg-black">
      <div className="text-white text-center gap-5 items-center flex justify-center h-screen text-5xl">
      {t('Hello World')}
      <button onClick={() => changeLanguage("lang0")}>lang0</button>
      <button onClick={() => changeLanguage("lang1")}>lang1</button>
      </div>
    </main>
  )
}


export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
