import { Stack, useLocalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { data } from "../../data/data";
import List from "../../components/list";

const Copo = () =>{

    const {id} = useLocalSearchParams()

    const idTransform = typeof id === 'string' ? Number(id) : null;

    const glasses = data.map(item=> item.glasses).flat()

    if (idTransform === null || idTransform < 0) {
        return <Text>ID inválido ou copo não encontrado</Text>
    }

    const selectedGlass = glasses[idTransform -1]

    if (!selectedGlass || !selectedGlass.size) {
        return <Text>Copo inválido</Text>
    }

    return(
        <SafeAreaView>
            <Stack screenOptions={{title:''}}/>
            <ScrollView>
                <View>
                    <Image source={{uri: selectedGlass.img}}
                    resizeMode="cover"
                    style={styles.img}
                    />
                    <Text style={styles.info}>Copo de {selectedGlass.size}ml + {selectedGlass.size > 500? '4 complementos': '3 complementos'}</Text>
                    </View>
                    <View style={styles.list}>
                        {data.map(item=> item.products.map(item=>(
                            <List key={item.id} name={item.name} url={item.img}/>
                        )))}
                    </View>
                    <Text style={styles.aditional}>Adicionais: + R$ 4,00</Text>
                    <View style={styles.list}>
                        {data.map(item=> item.aditional.map(item=>(
                            <List key={item.id} name={item.name} url={item.img}/>
                        )))}
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    img:{
        width: '100%',
        height: 200
    },
    info: {
        fontWeight: '900',
        margin: 10,
        fontSize: 20,
        textAlign: 'center'
    },
    list: {
        marginTop: 10
    },
    aditional:{
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 15
    }
})

export default Copo