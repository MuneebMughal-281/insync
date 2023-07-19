import { HelmetProvider } from 'react-helmet-async';
import { CustomTheme } from '@src/theme';
import { Routers } from '@src/routes/Routers';
export const App = () => {
  return (
    <HelmetProvider>
      <CustomTheme>
        <Routers />
      </CustomTheme>
    </HelmetProvider>
  );
};
