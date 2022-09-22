import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../core/StackParamLists/AuthStackParamList';
import CommonStyles from '../styles/CommonStyle';
import { COLORS } from '../constants/Colors';
import SpaceStyles from '../styles/SpaceStyles';
import CustomText from '../components/Text/CustomText';

type props = {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'AsteroidDetails'>;
    route: RouteProp<AuthStackParamList, 'AsteroidDetails'>;
};

const AsteroidDetails = ({ navigation, route }: props) => {

    const { name, jplUrl, potentiallyAsteroid } = route.params

    return (
        <View style={[CommonStyles.mainContainer]}>
            <SafeAreaView style={{ backgroundColor: COLORS.WHITE }} />
            <View style={[SpaceStyles.spaceHorizontal, SpaceStyles.top3]}>
                <Text>
                    <CustomText
                        text={'Name : '}
                        numberOfLines={undefined}
                        style={[SpaceStyles.top5, { fontSize: 18, fontWeight: 'bold' }]}
                    />
                    <CustomText
                        text={name}
                        numberOfLines={undefined}
                        style={[SpaceStyles.top5, { fontSize: 18 }]}
                    />
                </Text>
                <Text style={SpaceStyles.top2}>
                    <CustomText
                        text={'nasa_jpl_url : '}
                        numberOfLines={undefined}
                        style={{ fontSize: 18, fontWeight: 'bold' }}
                    />
                    <CustomText
                        text={jplUrl}
                        numberOfLines={undefined}
                        style={{ fontSize: 18 }}
                    />
                </Text>
                <Text style={SpaceStyles.top2}>
                    <CustomText
                        text={'is_potentially_hazardous_asteroid : ' + potentiallyAsteroid}
                        numberOfLines={undefined}
                        style={{ fontSize: 18, fontWeight: 'bold' }}
                    />
                </Text>
            </View>
        </View>
    );
};

export default AsteroidDetails;