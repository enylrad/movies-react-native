import React from 'react'

import currencyFormatter from 'currency-formatter'
import { View, Text, FlatList } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItems } from './CastItems';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>

                {/* Rating */}
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16} />
                    <Text>{movieFull.vote_average}</Text>

                    <Text
                        style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                {/* History */}
                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>

                {/* Money */}
                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItems actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }} />
            </View>
        </>
    )
}
