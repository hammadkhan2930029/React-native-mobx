import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";
import myNotesStored from '../../store/store';
import { observer } from "mobx-react-lite";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons"; 
import Icon from "react-native-vector-icons/MaterialIcons";



const Home = observer(() => {

    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View style={styles.datalist}>
                {myNotesStored.notes.length === 0 ? (
                    <Text style={{ textAlign: 'center', marginTop: 50 }}>
                        No Notes Found
                    </Text>
                ) : (
                    <FlatList
                        data={myNotesStored.notes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <View>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                                <View style={styles.btnView}>

                                    <TouchableOpacity style={styles.editBTN} onPress={() => navigation.navigate('AddNotes', { noteid: item.id, notetitle: item.title, notedescription: item.description })}>
                                        <Text style={styles.edit}>Edit</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.deleteBtn} onPress={() => myNotesStored.deleteNote(item.id)}>
                                        <Text style={styles.delete}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                )}
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddNotes')}>

                <Text style={styles.btnText}>Add Notes</Text>
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        position: 'relative'

    },
    addBtn: {
        position: 'absolute',
        backgroundColor: '#0048ac',
        width: 100,
        height: 50,
        bottom: 50,
        alignSelf: 'flex-end',
        margin: 10,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    btnText: {
        color: '#fff',
        fontWeight: '700'
    },
    datalist: {
        marginTop: 50,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 5,
        borderRadius: 10,
        elevation: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontWeight: '700',
        fontSize: 16
    },
    btnView: {
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    editBTN: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    edit: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    deleteBtn: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10,
        // width: "60%",
        justifyContent: 'center',
        alignItems: 'center'

    },
    delete: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },

})

export default Home;