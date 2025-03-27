import { Stack } from "expo-router"


const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="copo/[id]" options={{title: 'Monte seu Açai'}}/>
        </Stack>
    )
}

export default RootLayout