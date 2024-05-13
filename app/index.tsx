import { Loading } from "@/components/Loading";
import { Routes } from "@/src/routes";
import theme from "@/src/theme/theme";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontsLoaded ?   <Routes /> :  <Loading />
      }
    </ThemeProvider>
  );
}

export default Index;