import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    //const blogPosts = useContext(BlogContext);
    const { data, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button 
                title="Add Post" 
                style={ styles.button }
                onPress={addBlogPost} />
            <FlatList
                data={ data } 
                keyExtractor={ (blogPosts) => blogPosts.title }
                renderItem={({ item }) => {
                    return (
                        <Text>{ item.title } </Text>
                    )
                }

                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100
    }
});

export default IndexScreen; 