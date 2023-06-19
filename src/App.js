import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    FlatList,
    ScrollView,
    Dimensions,
} from 'react-native';
import data from './news_data.json';
import NewsCard from '../components/NewsCard';
import newsBannerData from '../src/news_banner_data.json';


function App() {

    const renderNews = ({ item }) => <NewsCard news={item} />
    const index = item => item.u_id.toString()
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bundle</Text>


            <FlatList
                ListHeaderComponent={() => (
                    <ScrollView keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false}>
                        {newsBannerData.map(bannerNews => (
                            <Image
                                style={styles.bannerImage}
                                source={{
                                    uri: bannerNews.imageUrl
                                }} />
                        ))
                        }
                    </ScrollView>
                )}

                keyExtractor={index}
                style={{ padding: 10 }}
                data={data}
                renderItem={renderNews}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        padding: 10
    },
    bannerImage: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,
        margin: 3,
    }
});

export default App;
