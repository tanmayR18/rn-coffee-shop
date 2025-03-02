import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import PopUpAnimation from '../components/PopUpAnimation';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';

const OrderHistoryScreen = ({navigation}: any) => {
  const tabBarHeight = useBottomTabBarHeight();
  const OrderHistoreList = useStore((state: any) => state.OrderHistoreList);
  console.log('History=', OrderHistoreList.length);
  const [showAnimation, setShowAnimation] = useState(false);

  const navigationHandler = ({index, id, type}) => {
    navigation.push('Details', {
      index,
      id,
      type,
    });
  };

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/download.json')}
        />
      ) : (
        <></>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFLex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />

            {OrderHistoreList.length === 0 ? (
              <EmptyListAnimation title="No Order History" />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoreList.map((data, index) => (
                  <OrderHistoryCard
                    key={index}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
            )}
          </View>
          {OrderHistoreList.length > 0 ? (
            <TouchableOpacity onPress={buttonPressHandler} style={styles.DownloadButton}>
              <Text style={styles.ButtonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  LottieAnimation: {
    height: 250,
  },
  ScrollViewFLex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30,
  },
  DownloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});
