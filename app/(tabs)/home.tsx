import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { data } from "../../data/data"
import { Item } from "../../components/item"

const Home = () =>{
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Copos unitários</Text>
            <View>
                {data.map(item=> item.glasses.map(item=>(
                    <Item key={item.id} id={item.id} img={item.img} price={item.value} size={item.size}/>
                )))}
            </View>
            <Text style={styles.title}>Combos</Text>
            <View style={styles.box}>
                <Image 
                resizeMode="cover"
                style={styles.img}
                source={{uri: 'data:image/jpeg;base64,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'}}
                />
                <View style={{flexShrink: 1}}>
                    <Text style={styles.name}>Combo Casal</Text>
                    <Text style={styles.description}>Dois copos de Açai 300ml com Paçoca, Leite Condensado e Leite em pó</Text>
                    <Text style={styles.price}>R$ 28.00</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    box:{
        flex: 1,
        flexDirection: 'row'
    },
    img:{
        width: 150,
        height: 100,
        marginRight: 20
    },
    description:{
        fontSize: 16,
        marginBottom: 10
    },
    name: {
        fontWeight:'900',
        fontSize: 20
    },
    price:{
        color: '#333',
        fontSize: 16,
        textAlign: 'right',
        marginRight: 10
    }
})

export default Home