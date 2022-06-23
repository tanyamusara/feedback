import {v4 as uuidv4} from 'uuid'
import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] =  useState(true);
const [feedback, setFeedback] = useState([]);

const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
})

useEffect(() => {
    fetchFeedback()
}, [])

//fetch feed back
const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
}

//delete feedback
const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}

//update feedback item
const updateFeedback = (id, upItem) => {
    setFeedback(feedback.map((item) => item.id ===id ? {
        ...item, ...upItem} : item
    ))
}

//set item to be updated
const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
} 

//add feedback
const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])

};

    return <FeedbackContext.Provider value={{
        feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback, isLoading 
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext


