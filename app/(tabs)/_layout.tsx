import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const RootTabs = () =>{
    return(
        <Tabs>
            <Tabs.Screen name="home" options={{headerShown: false,title:'Cardápio',  tabBarIcon:({color})=> <FontAwesome size={28} name="home" color={color}/> }}/>
            <Tabs.Screen name="about" options={{headerShown: false,title: 'Sobre', tabBarIcon:({color})=> <FontAwesome size={28} name="user" color={color}/>}}/>
            <Tabs.Screen name="contact" options={{headerShown: false,title: 'Contato', tabBarIcon: ({color})=> <FontAwesome size={28} name="phone" color={color}/>}}/>
        </Tabs>
    )
}

export default RootTabs