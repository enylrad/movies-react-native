import React from 'react'

import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { stylesGlobal } from '../theme/appTheme';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

type homeScreenProp = StackNavigationProp<RootStackParams>;

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<homeScreenProp>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.9}>
            <View style={{
                width,
                height,
                margin: 14,
            }}>
                <View style={[styles.imageContainer, stylesGlobal.shadow, stylesGlobal.allBorder]}>
                    <Image
                        source={{ uri }}
                        style={[styles.image, stylesGlobal.allBorder]} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
    },
})
