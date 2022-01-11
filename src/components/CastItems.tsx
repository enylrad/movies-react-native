import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, Text, View, StyleSheet } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

interface Props {
    actor: Cast;
}

export const CastItems = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={[styles.container, stylesGlobal.shadow, stylesGlobal.allBorder]}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={styles.photo} />
                )
            }

            <View style={styles.info}>
                <Text style={styles.name}>
                    {actor.name}
                </Text>
                <Text style={styles.character}>
                    {actor.character}
                </Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 10,
        paddingRight: 5,
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    info: {
        marginLeft: 10
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    character: {
        fontSize: 16,
        opacity: 0.7
    }
});
