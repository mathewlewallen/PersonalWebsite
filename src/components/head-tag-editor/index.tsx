import Head from 'next/head';
import { isDarkishTheme } from '@cc/lib/utils';

type HeadTagEditorProps = {
  googleAnalyticsId?: string;
  appliedTheme: string;
};

/**
 * Renders the head tag editor component.
 *
 * @param {HeadTagEditorProps} googleAnalyticsId - The Google Analytics ID.
 * @param {HeadTagEditorProps} appliedTheme - The applied theme.
 * @return {React.ReactElement} The head tag editor component.
 */
const HeadTagEditor: React.FC<HeadTagEditorProps> = ({
  googleAnalyticsId,
  appliedTheme,
}) => {
  return (
    <Head>
      <meta
        name="theme-color"
        content={isDarkishTheme(appliedTheme) ? '#000000' : '#ffffff'}
      />
      {googleAnalyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');
`}
          </script>
        </>
      )}
    </Head>
  );
};

export default HeadTagEditor;
