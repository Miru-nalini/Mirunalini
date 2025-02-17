import header from "@/components/header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{header: () => {
      return header();},
      contentStyle:{backgroundColor:'white'}
      }}>
      <Stack.Screen name="home"/>
      <Stack.Screen name="about"/>
      <Stack.Screen name="works"/>
      <Stack.Screen name="contact"/>
    </Stack>
  );
}
