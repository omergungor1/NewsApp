import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './newsCard.style';



const NewsCard = ({ news }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: news.imageUrl }} />
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <Text style={styles.authorName}>{news.author}</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{news.date}</Text>
                </View>
            </View>
        </View>
    )
}

export default NewsCard;