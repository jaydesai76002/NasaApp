import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/Colors';
import CommonStyles from '../../styles/CommonStyle';

type props = {
    loading: any;
};


const Loader = ({ loading }: props) => {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {
            }}>
            <View style={CommonStyles.modalBackground}>
                <View style={CommonStyles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={true}
                        color={COLORS.THEME_COLOR}
                        size="large"
                    />
                </View>
            </View>
        </Modal>
    );
};
export default Loader;