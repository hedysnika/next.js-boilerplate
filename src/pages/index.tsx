import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "../components/layout";

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
    <>
    <Layout>
    <main className="h-auto min-h-[calc(100vh_-_100px)] bg-[#363636]">
      <div className="flex items-center justify-center h-full gap-5 text-5xl text-center text-white">
      {t('Hello World')}
      <button onClick={() => changeLanguage("lang0")}>lang0</button>
      <button onClick={() => changeLanguage("lang1")}>lang1</button>
      </div>
    </main>
    </Layout>
    </>
  )
}


export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
