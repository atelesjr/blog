import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, delBlogPost } = useContext(Context);
    const { navigate } = navigation;

    return (
        <View>
            
            <FlatList
                data={ state }
                keyExtractor={ blogPost => blogPost.title }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => navigate('Show', { id: item.id}) }>
                            <View style={ styles.row }>
                                <Text style={ styles.title }>{ item.title } - { item.id } </Text>
                                <TouchableOpacity onPress={ () => delBlogPost(item.id)}>
                                    <Feather name="trash" style={ styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        
                    );
                }}
            />
        </View>
            
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    const { navigate } = navigation;
    return {
        headerRight: <TouchableOpacity onPress={ () => navigate('Create') }>
            <Feather name="plus-circle" size={30}  />
        </TouchableOpacity >
    };
};

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },

    title: {
        fontSize: 18
    },

    icon: {
        fontSize: 24
    },

    btn: {
        width: "80%"
    }
});

export default IndexScreen; 