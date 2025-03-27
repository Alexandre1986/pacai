import { Button, Image, StyleSheet, Text, View } from "react-native"
import { data } from "../data/data"
import { router } from "expo-router"

type Props = {
    id: number
    img: string
    size: number
    price: number
}

export const Item = ({id, img, size, price}:Props) =>{

    const handleClick = () =>{
        router.push(`copo/${id}`)
    }

    return(
        <View style={styles.container}>
            <Image
            source={{uri: img}}
            resizeMode="cover"
            style={styles.img}
            />
            <View style={styles.containerBox}>
                {id === 4 && <Text style={styles.info}>Copo de {size}ml de Açai puro</Text>}
                {id !== 4 && <Text style={styles.info}>Copo de {size}ml</Text>}
                {size <=500 && id != 4 && <Text style={styles.comp}>3 Complementos</Text>}
                {size >500 && <Text style={styles.comp}>4 Complementos</Text>}
                <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
                {id != 4 && <Button title="Complementos" onPress={handleClick}/>}   
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15
    },
    img: {
        width: 150,
        height: 100,
        marginRight: 20
    },
    containerBox:{
        flex: 1,
    },
    info: {
        fontWeight: '900',
        fontSize: 20
    },
    comp:{
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10
    },
    price: {
        color: '#333',
        fontSize: 16,
        textAlign: 'right',
        marginRight: 10
    }
})