
import React from 'react'

import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { stylesGlobal } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMoveDetails as useMovieDetails } from '../hooks/useMoveDetails';
import { MovieDetails } from '../components/MovieDetails';

const { height: screenHeight } = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id)

    return (
        <ScrollView>
            <View style={[styles.imageContainer, stylesGlobal.shadow]}>
                <View style={stylesGlobal.bottomBorder}>
                    <Image
                        source={{ uri }}
                        style={[styles.posterImage]} />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        flex: 1,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    }
})
