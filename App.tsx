import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}

      <StatusBar barStyle={'light-content'} />
    </ThemeProvider>
  );
}

