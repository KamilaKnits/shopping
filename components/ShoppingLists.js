import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';


const ShoppingLists = ({ db }) => {

    const [lists, setLists] = useState([]);

    const listsDocuments = await getDocs(collection(db, "shoppingLists"));

    useEffect(() => {

    }, [`${lists}`]);

    return (
        <View>
            <FlatList
            data={lists}
            renderItem={({ item }) =>
            <Text>{item.name}: {item.items.join(", ")}</Text>
            }>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});

export default ShoppingLists;