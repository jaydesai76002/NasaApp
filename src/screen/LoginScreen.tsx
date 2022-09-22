import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../core/StackParamLists/AuthStackParamList';
import CommonStyles from '../styles/CommonStyle';
import { COLORS } from '../constants/Colors';
import CustomeTextInput from '../components/TextInput/CustomeTextInput';
import SpaceStyles from '../styles/SpaceStyles';
import CustomButton from '../components/Button/CustomButton';
import CustomText from '../components/Text/CustomText';
import { asteroidCall, asteroidRandomCall } from '../core/redux/services/AuthServices';
import Loader from '../components/Loadar/loader';

type props = {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'LoginScreen'>;
    route: RouteProp<AuthStackParamList, 'LoginScreen'>;
};

const apiKey = 'eivCJZLF1lXkvjAIjHdVkSZTeOIP9Et0qzvhfVG5'

const LoginScreen = ({ navigation, route }: props) => {

    const [asteroidID, setAsteroidID] = useState('')
    const [loading, setLoading] = useState(false)

    const callRandomApi = () => {
        setLoading(true)
        asteroidRandomCall(`api_key=${apiKey}`)
            .then(async (res: any) => {
                callAstroApi(res?.data?.near_earth_objects[Math.floor(Math.random() * res?.data?.near_earth_objects.length)].id)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            });
    }

    const callAstroApi = (id: any) => {
        asteroidCall(`${id}?api_key=${apiKey}`)
            .then(async (res: any) => {
                setLoading(false)
                navigation.navigate('AsteroidDetails', {
                    name: res?.data?.name,
                    jplUrl: res?.data?.nasa_jpl_url,
                    potentiallyAsteroid: res?.data?.is_potentially_hazardous_asteroid
                })
            })
            .catch((err) => {
                setLoading(false)
                console.log(err);
            });
    }

    return (
        <View style={[CommonStyles.mainContainer]}>
            <SafeAreaView style={{ backgroundColor: COLORS.WHITE }} />
            <Loader loading={loading} />
            <View style={[SpaceStyles.spaceHorizontal, SpaceStyles.top3]}>
                <CustomText
                    text={'Nasa App'}
                    numberOfLines={undefined}
                    style={CommonStyles.headText}
                />
                <CustomeTextInput
                    defaultValue={asteroidID}
                    placeholder={`Enter Asteroid ID`}
                    containerStyle={[SpaceStyles.top5]}
                    onChangeText={(text: React.SetStateAction<string>) => setAsteroidID(text)}
                    editable={true}
                    multiline={false}
                    keyboardType={'number-pad'}
                    inputStyle={undefined}
                    value={undefined}
                />

                <CustomButton
                    containerStyle={[SpaceStyles.top5]}
                    text={`Random Asteroid`}
                    textStyle={CommonStyles.buttonText}
                    onPress={() => callRandomApi()}
                    disabled={asteroidID.length > 0 ? false : true}
                />
            </View>
        </View>
    );
};

export default LoginScreen;