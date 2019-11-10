import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const { navigate } = navigation

    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput value={title} 
                onChangeText={ text => setTitle(text) } 
                style={ styles.input } 
            />
            <Text style={styles.label} >Enter Content: </Text>
            <TextInput  value={content} 
                onChangeText={ text => setContent(text)} 
                style={ styles.input }
            />
            <Button 
                title="Add Blog Post" 
                onPress={ ()=> {
                    addBlogPost(title, content, () => {
                        navigate('Index');
                    });
                    
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        marginHorizontal: 5
    },

    label: {
        fontSize: 20,
        marginLeft: 5
    }
});

export default CreateScreen;