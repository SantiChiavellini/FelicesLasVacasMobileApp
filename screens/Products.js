import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { StyleSheet, Text, View } from "react-native"
import { Picker } from '@react-native-community/picker'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { globalStyles } from "../styles/globalStyles"
import productsActions from "../redux/actions/productsActions"
import CardItem from "../shared/CardItem"
import { Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from "react-native-reanimated"
import { Navigation } from "swiper"

function Products(props, { navigation }) {

    const [selectedValueCategory, setSelectedValueCategory] = useState('Todos');
    const [selectedValuePrice, setSelectedValuePrice] = useState('Todos')
    const [selectedValueStock, setSelectedValueStock] = useState('Todos')
    const [selectedValueEdit, setSelectedValueEdit] = useState('Stock')

    const [panel, setPanel] = useState({
        category: "",
        order:"",
        items: [],
        filteredItems:[]
    })

    useEffect( () => {
        setPanel({
            ...panel,
            items:props.products,
            filteredItems:props.products
        })
    }, [props])

    useEffect(() => {
        props.getProducts()
    }, [])

    const filterCategory = (value) => {

        let itemsFiltered

        (value !== 'Todos') 
            ? itemsFiltered = panel.items.filter(item=>(item.category === value)) 
            : itemsFiltered = panel.items

        setPanel({
            ...panel,
            filteredItems: itemsFiltered
        })
    }

    const cantfiltered = (filtered, value) => {

        let itemsFiltered = panel.filteredItems
        
        if(filtered === 'More') itemsFiltered.sort((a,b) => b[value] - a[value])
        if(filtered === 'Less') itemsFiltered.sort((a,b) => a[value] - b[value])

        setPanel({
            ...panel,
            filteredItems: itemsFiltered
        })
    }

    return (
        <>
            <View style={globalStyles.container}>
                <Text>Soy Products</Text>
                <StatusBar style="auto" />

                <Card style={styles.containerCard}>

                    <Icon style={styles.iconCart} name="filter">
                    <Picker
                        selectedValue={selectedValueCategory}
                        style={styles.pickerCard}
                        onValueChange={(itemValue) => {
                            setSelectedValueCategory(itemValue)
                            filterCategory(itemValue)
                        }}
                    >
                        <Picker.Item label="Todos" value="Todos"/>
                        <Picker.Item label="Secos" value="Secos"/>
                        <Picker.Item label="Refrigerados" value="Refrigerados"/>
                        <Picker.Item label="Congelados" value="Congelados"/>
                    </Picker>
                    </Icon>

                    <Icon style={styles.iconCart} name='circle-edit-outline'>
                    <Picker
                        selectedValue={selectedValueEdit}
                        style={styles.pickerCard}
                        onValueChange={(itemValue) => {setSelectedValueEdit(itemValue)}}
                    >
                        <Picker.Item label="Stock" value="Stock"/>
                        <Picker.Item label="Price" value="Price"/>
                    </Picker>
                    </Icon>

                    {(selectedValueEdit === 'Stock') &&
                        <Icon style={styles.iconCart} name="database">
                            <Picker
                                selectedValue={selectedValueStock}
                                style={styles.pickerCard}
                                onValueChange={(itemValue) => {
                                    setSelectedValueStock(itemValue)
                                    cantfiltered(itemValue, "stock")
                                    setSelectedValuePrice("Todos")
                                }}
                                >
                                <Picker.Item label="Todos" value="Todos"/>
                                <Picker.Item label="MasStock" value="More"/>
                                <Picker.Item label="MenosStock" value="Less"/>
                            </Picker>
                        </Icon>
                    }
                    {(selectedValueEdit === 'Price') &&
                        <Icon style={styles.iconCart} name="cash-usd">
                            <Picker
                                selectedValue={selectedValuePrice}
                                style={styles.pickerCard}
                                onValueChange={(itemValue) => {
                                    setSelectedValuePrice(itemValue)
                                    cantfiltered(itemValue, "price")
                                    setSelectedValueStock("Todos")
                                }}
                            >
                                <Picker.Item label="Todos" value="Todos"/>
                                <Picker.Item label="MasPrice" value="More"/>
                                <Picker.Item label="MenosPrice" value="Less"/>
                            </Picker>
                        </Icon>
                    }
                </Card>

                {/* FlatList con los productos */}
                <View style={styles.container}>
                <FlatList
                    key={"#"}
                    numColumns={2}
                    data={panel.filteredItems}
                    renderItem={({ item }) => (
                    <View style={styles.boxItem}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Product', item)}>
                        <CardItem product={item} />
                        </TouchableOpacity>
                    </View>
                    )}
                    keyExtractor={(item) => "#" + item._id}
                />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 490,
        padding: 7,
        marginTop: StatusBar.currentHeight || 0,
    },
    boxItem: {
        width: "50%",
        height: "50%",
        padding: 7,
    },
    title: {
        fontSize: 32,
    },
    text: {
        fontSize: 20,
        color: "black",
        height: 40,
    },
    containerCard:{
        flex: 1,
        borderColor:"green",
        backgroundColor:"whitesmoke",
        borderColor:"#2dbb1e",
        borderWidth: 2,
        margin:10,
        padding: 10
    },
    iconCart:{
        color:"#2dbb1e",
        fontSize:20,
        textAlign:"center",    
        overflow:"hidden",
        margin: 5,
    },
    pickerCard:{ 
        height: 18,
        width: 150,
        borderColor:"#2dbb1e",
    }
});

const mapDispatchToProps = {
    getProducts: productsActions.getProducts,
};

const mapStateToProps = (state) => {
    return {
        products: state.productsRed.products,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
