
// import { Groups } from "@/src/screens/Groups";
// import { NewGroup } from "@/src/screens/NewGroup";
import { Loading } from "@/components/Loading";
import { Players } from "@/src/screens/Players";
import theme from "@/src/theme/theme";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";


export default function Index() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontsLoaded ?
        <Players />
        // <NewGroup />
        //  <Groups /> 
        : <Loading />}
    </ThemeProvider>

  );
}
