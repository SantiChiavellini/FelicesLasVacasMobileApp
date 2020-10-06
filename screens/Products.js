import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { StyleSheet, Text, View } from "react-native"
import { Picker } from 'react-native'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { globalStyles } from "../styles/globalStyles"
import productsActions from "../redux/actions/productsActions"
import CardItem from "../shared/CardItem"
import { Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from "react-native-reanimated"
import { Navigation } from "swiper"
import RNPickerSelect from 'react-native-picker-select';
function Products(props, { navigation }) {

    const [selectedValueCategory, setSelectedValueCategory] = useState('Todos');
    const [selectedValueOrder, setSelectedValueOrder] = useState("0")
   

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
       
        value !== 'Todos'
        ? 
        itemsFiltered = panel.items.filter(item=>(item.category === value)) 
        : 
        itemsFiltered = panel.items

        setPanel({
            ...panel,
            filteredItems: itemsFiltered
        })

        switch (selectedValueOrder){
            case 0: 
                    
            case 1:
                cantfiltered("More", "price")
                break
            case 2:
                cantfiltered("Less", "price")
                break
            case 3:
                cantfiltered("More", "views")
                break
            case 4:
                cantfiltered("Less", "views")
                break
        }
        
    }

    const cantfiltered = (filtered, value) => {
        filterCategory(selectedValueCategory)
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
                
                <StatusBar style="auto" />
                <View style={{flex:1}}>
             <Card  style={{flex:1, borderRadius:20, borderColor:"#009387", borderWidth:2}} >

            <View style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            
                <View style={styles.viewPicker}>
                    
                <RNPickerSelect
                    style={pickerStyle}
                    placeholder={{label:"Filtrar por categoria: "}}
                    onValueChange={(value) => {
                        switch (value){
                            case "Todos":
                                setSelectedValueCategory("Todos")
                                filterCategory("Todos")
                                break
                            case "Secos":
                                setSelectedValueCategory("Secos")
                                filterCategory("Secos")
                                break
                            case "Refrigerados":
                                setSelectedValueCategory("Refrigerados")
                                filterCategory("Refrigerados")
                                break
                            case "Congelados":
                                setSelectedValueCategory("Congelados")
                                filterCategory("Congelados") 
                                break      
                        }
                    }}
                    items={[
                        { label:"Todos", value:"Todos" },
                        { label:"Secos", value:"Secos" },
                        { label:"Refrigerados", value:"Refrigerados" },
                        { label:"Congelados", value:"Congelados" }
                    ]}
                    
                />
                </View>
                <Icon name="arrow-down-bold-circle-outline" size={24} color="#009387" />
            </View>
            <View style={{flex:1, flexDirection:"row", alignItems:"center",justifyContent:"center"}}>
                
                <View style={styles.viewPicker}>
                <RNPickerSelect
                    style={pickerStyle}
                    placeholder={{label:"Ordenar por:"}}
                    onValueChange={(value) => {
                        switch (value){
                            case "Mp":
                                setSelectedValueOrder("1")   
                                cantfiltered("More", "price")
                                break
                            case "mp":
                                setSelectedValueOrder("2")
                                cantfiltered("Less", "price")
                                break
                            case "Mv":
                                setSelectedValueOrder("3")
                                cantfiltered("More", "views")
                                break
                            case "mv":
                                setSelectedValueOrder("4")
                                cantfiltered("Less", "views")
                                break       
                        }}}
                    items={[
                        { label: 'Mayor precio', value: 'Mp' },
                        { label: 'Menor Precio', value: 'mp' },
                        { label: 'Mas vendidos', value: 'Mv' },
                        { label: 'Menos vendidos', value: 'mv' }
                    ]}
                />
                </View>
                <Icon name="arrow-down-bold-circle-outline" size={24} color="#009387" />
                </View>
            </Card> 
                </View>
                <View style={{flex:3}}>
                
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
            </View>
        </>
    );
}


const pickerStyle={
    inputIOS: {
		color: '#009387',
        textAlign: "center",
        fontSize:20
	},
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 2,
        marginTop: StatusBar.currentHeight || 0,
    },
    viewPicker:{
        
        backgroundColor:"transparent", 
        width:"80%", 
        justifyContent:"center",         
        paddingVertical:10, 
        borderRadius:20,
        borderColor:"#009387",
        borderWidth:2
            
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
        backgroundColor:"red",
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
        flex:1
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
