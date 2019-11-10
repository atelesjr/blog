import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type){
        case 'add_blogpost':
            return [ 
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title ,
                    content: action.payload.content
                }
            ];
        case 'del_blogpost':
            return state.filter( blogPost => blogPost.id !== action.payload );
        default:
            return state;
    };
};

const addBlogPost = dispatch  => {
    return (title, content, callBack ) => {
        dispatch({ type: 'add_blogpost' , payload: { title, content } });
        callBack();
    };
    
};

const delBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'del_blogpost', payload: id });
    };
    
};


export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, delBlogPost },
    []
);