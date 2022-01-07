import React from 'react'

import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Movies in Cinema */}
                <Carousel
                    data={nowPlaying!}
                    renderItem={({ item }) => <MoviePoster movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                />

                {/* Popular Movies */}
                <HorizontalSlider title="Populares" movies={popular!} />
                <HorizontalSlider title="Mejor puntuadas" movies={topRated!} />
                <HorizontalSlider title="Próximamente" movies={upcoming!} />
            </View>
        </ScrollView>
    )
}
