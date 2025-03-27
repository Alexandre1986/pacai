import { router, Stack } from "expo-router"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const Screen = () =>{

    const handleClick = () =>{
        router.replace('home')
    }

    return(
        <View style={styles.container}>
            <Image
            source={require('../assets/logo.png')}
            resizeMode="cover"
            style={styles.img}
            />
            <Text style={styles.title}>Miau Açai</Text>
            <Pressable style={styles.btn} onPress={handleClick}>
                <Text style={styles.labelBtn}>
                    Venha conhecer nossos açais
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    img:{
        width: '90%'
    },
    title:{
        fontSize: 35,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: '#c0c',
        marginBottom: 10
    },
    btn:{
        backgroundColor: '#a3b',
        borderRadius: 10
    },
    labelBtn:{
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 20
    }
})

export default Screen