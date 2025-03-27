import { Link } from "expo-router"
import { Button, Image, Linking, Pressable, StyleSheet, Text, View } from "react-native"


const Contact = () => {

    const openWhatsApp = () => {
        const phoneNumber = '5551992835190'; // Número no formato internacional
        const message = 'Olá, gostaria de fazer um pedido!'; // Mensagem pré-definida
    
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
        Linking.openURL(url).catch(() => {
            alert('Não foi possível abrir o WhatsApp.');
        });
    };

    return(
        <View style={styles.container}>
            <Image
            source={{uri: 'https://static.vecteezy.com/system/resources/previews/025/220/175/original/cartoon-cat-cute-ai-generate-png.png'}}
            resizeMode="cover"
            style={styles.img}
            />
            <Link style={styles.ifood} href={'https://www.ifood.com.br/delivery/porto-alegre-rs/miau-acai-zona-norte-vila-jardim/9c5ba904-9612-4167-917d-5242217ff2eb'}>Peça no Ifood</Link>
            <Link style={styles.instagram} href={'https://www.instagram.com/miauacaizn/'}>Siga nossa página do Instagram</Link>
            <Pressable style={styles.btn} onPress={openWhatsApp}>
                <Text style={styles.label}>Abrir WhatsApp</Text>
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
    ifood:{
        backgroundColor: '#f00',
        padding: 10,
        fontWeight: 'bold',
        borderRadius: 10,
        color: '#fff',
        fontSize: 20
    },
    instagram:{
        marginVertical: 15,
        backgroundColor: '#c0c',
        padding: 10,
        fontWeight: 'bold',
        borderRadius: 10,
        color: '#fff',
        fontSize: 20
    },
    btn:{
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#0c0'
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    img:{
        width: '100%',
        height: 450,
        marginBottom: 20
    }
})

export default Contact