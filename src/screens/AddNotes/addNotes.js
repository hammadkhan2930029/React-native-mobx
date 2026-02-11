import { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import myNotesStored from '../../store/store';
import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from "mobx-react-lite";


const AddNotes = observer(() => {

    const route = useRoute()

    const {noteid , notetitle, notedescription } = route.params || {};

    const navigation = useNavigation()
    const [title, setTitle] = useState(notetitle || '')
    const [description, setDescription] = useState(notedescription || '')

   
    const saveData = () => {

        if (!title || !description) return

        if (noteid) {
            myNotesStored.updateNote(noteid, { title, description })

        } else {

            myNotesStored.addNotes({ title, description })
        }
        navigation.goBack()

    }
   
    
    return (
        <View style={styles.container}>
            <View style={styles.inputFields}>
                <TextInput
                    placeholder={notetitle || "Title"}
                    style={styles.input}
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <TextInput
                    placeholder={notedescription || "Description"}
                    style={styles.input}
                    value={description}
                    onChangeText={text => setDescription(text)} />
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={saveData}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default AddNotes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10
    },
    inputFields: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 5,
        marginTop: 100

    },
    input: {
        width: '100%',
        margin: 5,
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#f5f5f5',
        elevation: 3

    },
    btn: {
        backgroundColor: '#2446db',
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 5
    },
    btnText: {
        color: 'white',
        fontWeight: '700',

    },
});
