import { Image, StyleSheet, Text, View } from "react-native"

const About = () =>{
    return(
        <View style={styles.container}>
            <Image
            source={require('../../assets/sobre.jpg')}
            resizeMode="cover"
            style={styles.img}
            />
            <Text style={styles.title}>Sou Karen,</Text>
            <Text style={styles.title}>Empreendedora do Miau açai</Text>
            <Text style={styles.description}>Entrei no ramo de açai em 2025 iniciando em um carrinho e depois expandi 
                meu negócio no Ifood colocando muito empenho e entregando um produto de qualidade para agradar a todos os publicos.</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 30
    },
    title:{
        fontWeight: 'bold',
        fontSize: 23,
        color: '#f0f'
    },
    description:{
        fontSize: 18,
        marginTop: 15,
        color: '#b0b'
    },
    img: {
        width: '100%',
        height: 300,
        marginBottom: 20
    }
})

export default About