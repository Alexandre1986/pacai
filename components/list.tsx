import { Image, StyleSheet, Text, View } from "react-native"

type Props = {
    name: string,
    url: string
}

const List = ({name, url}: Props) =>{
    return(
        <View style={styles.container}>
            <Image
            source={{uri: url}}
            resizeMode="cover"
            style={styles.img}
            />
            <Text style={styles.info}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    info:{
        fontSize: 18,

    },
    img: {
        width: 100,
        height: 50,
        marginRight: 20
    }
})

export default List